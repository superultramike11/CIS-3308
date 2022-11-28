<%@page import="model.webUser.DbMods"%>
<%@page contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%> 

<%@page language="java" import="model.webUser.*" %> 
<%@page language="java" import="com.google.gson.*" %>
<%@page language="java" import="dbUtils.*" %>

<%
    StringData sd = new StringData();
    
    String pswd = request.getParameter("pswd");
    String email = request.getParameter("email");
    
    if(pswd == null ||  email == null ) {
        sd.errorMsg = "Must supply a 'email' and 'pswd'";
    } else {
        DbConn dbc = new DbConn();
        sd.errorMsg = dbc.getErr();
        if(sd.errorMsg.length() == 0) {
            System.out.println("*** Ready to call DbMods.findLogon");
            sd = DbMods.findLogon(dbc, pswd, email);
            if(sd.errorMsg.length() == 0) {
                session.setAttribute("user", sd);
            } else {
                sd.errorMsg += "You have been logged off";
                session.invalidate();
            }
        }
        dbc.close();
    }
    
    Gson gson = new Gson();
    out.print(gson.toJson(sd));

   /*  Note: 
    Because all of our Web APIs are invoked by our ajax (JavaScript) function 
    which expects to find the JSON of a valid object written on the page, we 
    must always write the JSON of some java object to the page, no matter what. 
    
    In thie example, we actually need to write to the page, to let the client side 
    know (the JS code that called us using AJAX) what was extracted from the JSP 
    implicit session object.
     */
%>