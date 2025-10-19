import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
public class JDBCExample {
    public JDBCExample() throws Exception{
        Connection connect;
        connect = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "@admin2110");
        PreparedStatement createName = connect.prepareStatement("INSERT INTO user" + "(name)" + " VALUES(?)" );
        createName.setString(1, "delta");
        Statement statement = connect.createStatement();
        int rowsUpdated = createName.executeUpdate();
        createName.close();
        ResultSet rs = statement.executeQuery("SELECT * FROM user");
        while (rs.next()) {
            System.out.println("Column 1 is Result set is " + rs.getString(1));
        }
        String sql = "INSERT INTO user VALUES ('echo')";
        Statement insertName = connect.createStatement();
        int rowChanged = insertName.executeUpdate(sql);
    }
    public static void main(String[] args) throws Exception {
        new JDBCExample();
    }
}
