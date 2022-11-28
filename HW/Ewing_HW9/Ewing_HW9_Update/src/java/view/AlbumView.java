package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.album.*;

// classes in my project
import dbUtils.*;

public class AlbumView {

    public static StringDataList getAllUsers(DbConn dbc) {

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList(); 
        
        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();
        
        try {
            String sql = "SELECT album_id, album_name, album_cover, album_price, "
                    + "album_release_date, album_genre, album_author, album_rating, "
                    + "album.web_user_id, user_email "
                    + "FROM album, web_user where album.web_user_id = web_user.web_user_id "
                    + "ORDER BY album_id ";  // you always want to order by something, not just random order.
            
            //String sql = "SELECT * FROM FA22_3308_tuj25271.album ";  // you always want to order by something, not just random order.
            
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {
                
                sd = new StringData();
                
                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.

                // plainInteger returns integer converted to string with no commas.
                sd.album_id = FormatUtils.plainInteger(results.getObject("album_id"));
                sd.album_name = FormatUtils.formatString(results.getObject("album_name"));
                sd.album_cover = FormatUtils.formatString(results.getObject("album_cover"));
                sd.album_price = FormatUtils.formatDollar(results.getObject("album_price"));
                sd.album_release_date = FormatUtils.formatDate(results.getObject("album_release_date"));
                sd.album_genre = FormatUtils.formatString(results.getObject("album_genre"));
                sd.album_author = FormatUtils.formatString(results.getObject("album_author"));
                sd.album_rating = FormatUtils.formatString(results.getObject("album_rating"));
                sd.web_user_id = FormatUtils.plainInteger(results.getObject("web_user_id"));
                sd.user_email = FormatUtils.formatString(results.getObject("user_email"));
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in AlbumView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}