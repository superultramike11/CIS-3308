package model.album;

import model.webUser.*;
import dbUtils.*;

public class DbMods {

    /*
    Returns a "StringData" object that is full of field level validation
    error messages (or it is full of all empty strings if inputData
    totally passed validation.  
     */
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
        errorMsgs.album_name = ValidationUtils.stringValidationMsg(inputData.album_name, 45, true);
        errorMsgs.album_cover = ValidationUtils.stringValidationMsg(inputData.album_cover, 200, true);
        errorMsgs.album_price = ValidationUtils.decimalValidationMsg(inputData.album_price, false);
        errorMsgs.album_release_date = ValidationUtils.dateValidationMsg(inputData.album_release_date, false);
        errorMsgs.album_genre = ValidationUtils.stringValidationMsg(inputData.album_genre, 45, false);
        errorMsgs.album_author = ValidationUtils.stringValidationMsg(inputData.album_author, 45, false);
        errorMsgs.album_rating = ValidationUtils.stringValidationMsg(inputData.album_rating, 45, false);
        errorMsgs.web_user_id = ValidationUtils.integerValidationMsg(inputData.web_user_id, true);

        return errorMsgs;
    } // validate 

    public static StringData insert(StringData inputData, DbConn dbc) {

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
            // Start preparing SQL statement
            String sql = "INSERT INTO album (album_name, album_cover, web_user_id) "
                    + "values (?,?,?)";

            // PrepStatement is Sally's wrapper class for java.sql.PreparedStatement
            // Only difference is that Sally's class takes care of encoding null 
            // when necessary. And it also System.out.prints exception error messages.
            PrepStatement pStatement = new PrepStatement(dbc, sql);

            // Encode string values into the prepared statement (wrapper class).
            pStatement.setString(1, inputData.album_name); // string type is simple
            pStatement.setString(2, inputData.album_cover);
            pStatement.setInt(3, ValidationUtils.integerConversion(inputData.web_user_id));

            // here the SQL statement is actually executed
            int numRows = pStatement.executeUpdate();

            // This will return empty string if all went well, else all error messages.
            errorMsgs.errorMsg = pStatement.getErrorMsg();
            if (errorMsgs.errorMsg.length() == 0) {
                if (numRows == 1) {
                    errorMsgs.errorMsg = ""; // This means SUCCESS. Let the user interface decide how to tell this to the user.
                } else {
                    // probably never get here unless you forgot your WHERE clause and did a bulk sql update.
                    errorMsgs.errorMsg = numRows + " records were inserted when exactly 1 was expected.";
                }
            } else if (errorMsgs.errorMsg.contains("foreign key")) {
                errorMsgs.errorMsg = "Invalid Web User Id -- " + errorMsgs.errorMsg;
            } else if (errorMsgs.errorMsg.contains("Duplicate entry")) {
                errorMsgs.errorMsg = "That album is already taken -- " + errorMsgs.errorMsg;
            }

        } // customerId is not null and not empty string.
        return errorMsgs;
    } // insert

} // class
