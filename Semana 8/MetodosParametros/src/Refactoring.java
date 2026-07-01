public class Refactoring {
    public static void main(String[] args) {
        printReportCard("Laura", "A");
        printReportCard("Mariana", "A");
        printReportCard("Marcela Andrea", "A");
    }

    public static void printReportCard(String name, String grade) {
        System.out.println("Student: " + name);
        System.out.println("Grade: " + grade);
        System.out.println("------");
    }
}
