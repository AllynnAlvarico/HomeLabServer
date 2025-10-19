import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class InsertData extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        PrintWriter out = response.getWriter();
//        response.setContentType("text/plain");
//        out.println("Hello");
//        out.println("Hello");
//        try {
//            out.println("Hello in first of try catch");
//            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test");
//            out.println(conn.toString());
//            out.println("Hello in end of try catch");
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
        String input = request.getParameter("name");

        String database = "test";
        String coloumnName = "name";

        String jdbcURL = "jdbc:mysql://localhost:3306/"+database;
        String dbUser = "root";
        String dbPassword = "@admin2110";

        response.setContentType("text/plain");

        try (Connection connection = DriverManager.getConnection(jdbcURL, dbUser, dbPassword)) {
//            out.println("Connecting to database: " + jdbcURL);
            String sql = "INSERT INTO user (" + coloumnName + ") VALUES (?)";
//            out.println("Preparing SQL: " + sql);
            PreparedStatement statement = connection.prepareStatement(sql);
//            out.println("Preparing Statement: " + statement);
            statement.setString(1, input);
//            out.println("Inserting Data to the database");
            int rowsInserted = statement.executeUpdate();
//            out.println("Executed");
            if (rowsInserted > 0) {
                out.println("Data inserted successfully!");
            } else {
                out.println("Failed to insert data.");
            }

        } catch (Exception e) {
//            out.println("Driver Connection: " + jdbcURL);
            throw new ServletException("DB error", e);
        }
    }

    public static void main(String[] args) {
        new InsertData();
    }
}

