package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.other.*;

// classes in my project
import dbUtils.*;

public class OtherView {

    public static StringDataList getAllUsers(DbConn dbc) {

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList(); 
        
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        
        try {
            String sql = "SELECT other.album_id, other.album_name, web_user.web_user_id "
                    + "FROM other "
                    + "INNER JOIN web_user On other.album_id = web_user.album_id "
                    + "ORDER BY album_id ";  // you always want to order by something, not just random order.
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                
                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.

                // plainInteger returns integer converted to string with no commas.
                sd.album_id = FormatUtils.plainInteger(results.getObject("album_id"));
                sd.album_name = FormatUtils.formatString(results.getObject("album_name"));
                sd.web_user_id = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in WebUserView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}