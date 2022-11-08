<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="model.webUser.StringData" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    StringData sd = (StringData) session.getAttribute("user");

    if (sd != null) {
        sd.errorMsg = "Welcome";
    } else {
        sd = new StringData();
        sd.errorMsg = "You aren't logged in, profile unavailable";
    }

    Gson gson = new Gson();
    out.print(gson.toJson(sd));
%>