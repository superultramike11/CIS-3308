<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@page language="java" import="dbUtils.*" %>
<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="view.WebUserView" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    // getUserAlt.jsp

    StringData sd = new StringData();
    String minFee = request.getParameter("minMembershipFee");
    String maxBday = request.getParameter("maxBirthday");
    if ((minFee == null) || (maxBday == null)) {
        sd.errorMsg = "Cannot search for user: 'minMembershipFee' and 'maxBirthday' must be supplied";
    } else {
        DbConn dbc = new DbConn();
        sd.errorMsg = dbc.getErr();
        if (sd.errorMsg.length() == 0) {
            System.out.println("*** Ready to call newFind");
            sd = DbMods.newFind(dbc, minFee, maxBday);
        }
        dbc.close();
    }
    Gson gson = new Gson();
    out.print(gson.toJson(sd).trim());
%>