<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="java.sql.DriverManager" %>
<%@page language="java" import="java.sql.Connection" %> 
<%@page language="java" import="java.sql.PreparedStatement" %> 
<%@page language="java" import="java.sql.ResultSet" %> 

<%@page language="java" import="model.webUser.StringData" %> 
<%@page language="java" import="model.webUser.StringDataList" %> 

<%@page language="java" import="com.google.gson.*" %>

<%
    // default constructor creates nice empty StringDataList with all fields "" (empty string, nothing null).
    StringDataList strDataList = new StringDataList();
    StringData sd = new StringData();

    try {
        String DRIVER = "com.mysql.jdbc.Driver";
        Class.forName(DRIVER).newInstance();

        java.sql.Connection conn = null;

        try {
            String dbAndPass = "sallyk_3308?user=sallyk&password=Vaca1415";

            // Assume you are running from home using tunneling...
            String url = "jdbc:mysql://localhost:3307/" + dbAndPass;

            conn = DriverManager.getConnection(url);

            String sql = "SELECT web_user_id, user_email FROM web_user "
                    + " ORDER BY web_user_id ";

            try {

                System.out.println("*** Ready to prepare statement. Sql is: " + sql);
                PreparedStatement stmt = conn.prepareStatement(sql);

                System.out.println("*** Ready to execute the sql.");
                ResultSet results = stmt.executeQuery();
                while (results.next()) {
                    System.out.println("*** Ready to extract one row from the result set.");
                    sd = new StringData();
                    try {
                        sd.webUserId = String.valueOf(results.getInt("web_user_id")); // convert to string
                        sd.userEmail = results.getString("user_email");
                    } catch (Exception e) {
                        sd.errorMsg = "Exception thrown while extracting data from result set. Error is: "
                                + e.getMessage();
                    }
                    strDataList.add(sd);
                }
                results.close();
                stmt.close();

            } catch (Exception e) {
                sd.errorMsg = "Exception thrown compiling this SQL (" + sql + "). Error is: " + e.getMessage();
                strDataList.add(sd);
                System.out.println("***** Exception thrown compiling this SQL (" + sql + "). Error is: "
                        + e.getMessage());

            } finally {
                conn.close(); // ALWAYS close the database connection to prevent DB Connection leak.
            }

        } catch (Exception e) {
            sd.errorMsg = "Exception thrown trying to connect. Error is: " + e.getMessage();
            strDataList.add(sd);
            System.out.println("***** Exception thrown trying to connect: " + e.getMessage());
        }

    } catch (Exception e) {
        sd.errorMsg = "Exception thrown trying to find MySQL Drivers. Error is: " + e.getMessage();
        strDataList.add(sd);
        System.out.println("***** Exception thrown trying to find MySQL Drivers. Error is: " + e.getMessage());
    }

    // This object (from the GSON library) can to convert between JSON <-> POJO (plain old java object) 
    Gson gson = new Gson();
    out.print(gson.toJson(strDataList));
%>