package org.apache.jsp.webAPIs;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.webUser.StringData;
import model.webUser.StringDataList;
import com.google.gson.*;

public final class _1_005flistUsersAPI_005fall_005fcode_005fin_005fJSP_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("application/json; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write(" \n");
      out.write("\n");
      out.write("\n");
      out.write(" \n");
      out.write(" \n");
      out.write(" \n");
      out.write("\n");
      out.write(" \n");
      out.write(" \n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

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

    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
