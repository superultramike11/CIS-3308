package model.album;

import dbUtils.DbConn;
import dbUtils.FormatUtils;
import dbUtils.ValidationUtils;
import dbUtils.PrepStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DbMods {

    public static StringData findById (DbConn dbc, String id) {
 
        // The find API needs to represent three cases: found web_user, not found, db error. 

        StringData sd = new StringData();
        try {
            String sql = "SELECT album_id, album_name, album_cover, album_price, album_release_date, album_genre, "
                    + "album_author, album_rating, web_user.web_user_id, user_email "
                    + "FROM album, web_user WHERE album.web_user_id = web_user.web_user_id "
                    + "AND album_id = ?";

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);

            // Encode the id (that the user typed in) into the select statement, into the first (and only) ? 
            stmt.setString(1, id);

            ResultSet results = stmt.executeQuery();
            if (results.next()) { // id is unique, one or zero records expected in result set
                /*
                    public String album_id = "";
                    public String album_name = "";
                    public String album_cover = "";
                    public String album_price = "";
                    public String album_release_date = "";
                    public String album_genre = "";
                    public String album_author = "";
                    public String album_rating = "";
                    public String web_user_id = "";
                    public String user_email = "";
                    public String errorMsg = "";
                */

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
                
            } else {
                sd.errorMsg = "Web User Not Found.";
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in DbMods.findById(): " + e.getMessage();
        }
        return sd;
    } // findById
    
    private static StringData validate(StringData inputData) {

        StringData errorMsgs = new StringData();

        /* Useful to copy field names from StringData as a reference
            public String album_id = "";
            public String album_name = "";
            public String album_cover = "";
            public String album_price = "";
            public String album_release_date = "";
            public String album_genre = "";
            public String album_author = "";
            public String album_rating = "";
            public String web_user_id = "";
            public String user_email = "";
            public String errorMsg = "";
         */
        // Validation
        errorMsgs.web_user_id = ValidationUtils.integerValidationMsg(inputData.web_user_id, true);

        return errorMsgs;
    } // validate 
    
    public static StringData update(StringData inputData, DbConn dbc) {

        StringData errorMsgs = new StringData();
        errorMsgs = validate(inputData);
        if (errorMsgs.getCharacterCount() > 0) {  // at least one field has an error, don't go any further.
            errorMsgs.errorMsg = "Please try again";
            return errorMsgs;

        } else { // all fields passed validation

            /*
                String sql = "SELECT web_user_id, user_email, user_password, membership_fee, birthday, "+
                    "web_user.user_role_id, user_role_type "+
                    "FROM web_user, user_role where web_user.user_role_id = user_role.user_role_id " + 
                    "ORDER BY web_user_id ";
             */
            /*
            String sql = "UPDATE album SET album_name=?, album_cover=?, album_price= ?, album_release_date=?, album_genre=?, album_author=?, album_rating=? "
                    + "web_user_id=?, user_email=? WHERE album_id = ?";
            */
            String sql = "UPDATE album SET album_name=?, album_cover=?, album_price=?, album_release_date=?, album_genre=?, album_author=?, album_rating=?, web_user_id=? "
                    + "WHERE album_id=?";
            
            // PrepStatement is Sally's wrapper class for java.sql.PreparedStatement
            // Only difference is that Sally's class takes care of encoding null 
            // when necessary. And it also System.out.prints exception error messages.
            PrepStatement pStatement = new PrepStatement(dbc, sql);

            // Encode string values into the prepared statement (wrapper class).
            //pStatement.setInt(1, ValidationUtils.integerConversion(inputData.album_id));
            pStatement.setString(1, inputData.album_name); // string type is simple
            pStatement.setString(2, inputData.album_cover);
            pStatement.setBigDecimal(3, ValidationUtils.decimalConversion(inputData.album_price));
            pStatement.setDate(4, ValidationUtils.dateConversion(inputData.album_release_date));
            pStatement.setString(5, inputData.album_genre);
            pStatement.setString(6, inputData.album_author);
            pStatement.setString(7, inputData.album_rating);
            pStatement.setString(8, inputData.web_user_id);
            pStatement.setInt(9, ValidationUtils.integerConversion(inputData.album_id));

            // here the SQL statement is actually executed
            int numRows = pStatement.executeUpdate();

            // This will return empty string if all went well, else all error messages.
            errorMsgs.errorMsg = pStatement.getErrorMsg();
            if (errorMsgs.errorMsg.length() == 0) {
                if (numRows == 1) {
                    errorMsgs.errorMsg = ""; // This means SUCCESS. Let the user interface decide how to tell this to the user.
                } else {
                    // probably never get here unless you forgot your WHERE clause and did a bulk sql update.
                    errorMsgs.errorMsg = numRows + " records were updated (expected to update one record).";
                }
            } else if (errorMsgs.errorMsg.contains("foreign key")) {
                errorMsgs.errorMsg = "Invalid Web User Id";
            } else if (errorMsgs.errorMsg.contains("Duplicate entry")) {
                errorMsgs.errorMsg = "That email address is already taken";
            }

        } // customerId is not null and not empty string.
        return errorMsgs;
    } // update
} // class
