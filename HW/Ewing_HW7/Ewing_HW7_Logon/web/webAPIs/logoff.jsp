<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="model.webUser.StringData" %> 
<%@page language="java" import="com.google.gson.*" %>

<%
    // Preparing this object to be written out.
    StringData sd = new StringData(); // all fields now set to ""
    sd.errorMsg = "You have been logged off"; // it's not really an error message, but... 
    
    session.invalidate();

    Gson gson = new Gson();
    out.print(gson.toJson(sd));
%>
