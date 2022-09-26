<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="dbUtils.DbConn" %>
<%@page language="java" import="dbUtils.FormatUtils" %>

<%@page language="java" import="java.sql.PreparedStatement" %> 
<%@page language="java" import="java.sql.ResultSet" %> 

<%@page language="java" import="model.webUser.StringData" %> 
<%@page language="java" import="model.webUser.StringDataList" %> 

<%@page language="java" import="com.google.gson.*" %>

<%
    // default constructor creates nice empty StringDataList with all fields "" (empty string, nothing null).
    StringDataList strDataList = new StringDataList();

    System.out.println("*** Ready to get Db Connection.");
    DbConn dbc = new DbConn();
    strDataList.dbError = dbc.getErr(); // returns "" if connection is good, else db error msg.
    System.out.println("*** Db Error is this (empty string means all good): " + dbc.getErr());
    String sql = "SELECT web_user_id, user_email, user_password, image, membership_fee, birthday, "
            + "web_user.user_role_id, user_role_type "
            + "FROM web_user, user_role WHERE web_user.user_role_id = user_role.user_role_id "
            + "ORDER BY web_user_id ";

    if (strDataList.dbError.length() == 0) { // if got good DB connection, 
        try {
            System.out.println("*** Ready to prepare statement. Sql is: " + sql);
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);

            System.out.println("*** Ready to execute the sql.");
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                System.out.println("*** Ready to extract one row from the result set.");
                StringData sd = new StringData();
                try {
                    sd.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
                    sd.userEmail = FormatUtils.formatString(results.getObject("user_email"));
                    sd.userPassword = FormatUtils.formatString(results.getObject("user_password"));
                    sd.image = FormatUtils.formatString(results.getObject("image"));
                    sd.birthday = FormatUtils.formatDate(results.getObject("birthday"));
                    sd.membershipFee = FormatUtils.formatDollar(results.getObject("membership_fee"));
                    sd.userRoleId = FormatUtils.plainInteger(results.getObject("web_user.user_role_id"));
                    sd.userRoleType = FormatUtils.formatString(results.getObject("user_role_type"));
                } catch (Exception e) {
                    sd.errorMsg = "Exception thrown while extracting data from result set: " + e.getMessage();
                }
                strDataList.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            StringData sd = new StringData();
            sd.errorMsg = "Exception thrown compiling this SQL (" + sql + "): " + e.getMessage();
            strDataList.add(sd);
        }
    }

    dbc.close(); // EVERY code path that opens a db connection, must also close it - no database connection leaks.

    // This object (from the GSON library) can to convert between JSON <-> POJO (plain old java object) 
    Gson gson = new Gson();
    out.print(gson.toJson(strDataList));
%>