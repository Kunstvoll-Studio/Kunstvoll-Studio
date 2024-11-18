import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;

public class HTMLCodeGenerator extends JFrame implements ActionListener {
    private JTextField fileNameTextField;
    private JTextField imageDisplayNameTextField;
    private JTextField breiteTextField;
    private JTextField hoeheTextField;
    private JTextField tiefeTextField;
    private String picFilePath, indexFilePath;
    

    public HTMLCodeGenerator() {
        setTitle("Kunstvoll Studio Image adder - by Ynou ");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 300);
        setLocationRelativeTo(null);

        // Create components
        JPanel mainPanel = new JPanel(new BorderLayout());
        JPanel browsePanel = new JPanel(new GridLayout(1, 2));
        JPanel controlPanel = new JPanel(new GridLayout(2, 2));
        JPanel picSizePanel = new JPanel(new GridLayout(2, 5));
        JPanel centerPanel = new JPanel(new GridLayout(2, 1));
        JButton browseButton = new JButton("Browse Image");
        JButton browseIndex = new JButton("Browse Index.html");
        fileNameTextField = new JTextField();
        fileNameTextField.setEditable(false);
        imageDisplayNameTextField = new JTextField();
        breiteTextField = new JTextField();
        breiteTextField.setHorizontalAlignment(JTextField.CENTER);
        hoeheTextField = new JTextField();
        hoeheTextField.setHorizontalAlignment(JTextField.CENTER);
        tiefeTextField = new JTextField();
        tiefeTextField.setHorizontalAlignment(JTextField.CENTER);

        // Create JLabels for picSizePanel with centered text
        JLabel breiteLabel = new JLabel("Breite: ");
        breiteLabel.setHorizontalAlignment(JLabel.CENTER);

        JLabel hoeheLabel = new JLabel("Höhe: ");
        hoeheLabel.setHorizontalAlignment(JLabel.CENTER);

        JLabel tiefeLabel = new JLabel("Tiefe: ");
        tiefeLabel.setHorizontalAlignment(JLabel.CENTER);

        JLabel xLabel1 = new JLabel(" x ");
        xLabel1.setHorizontalAlignment(JLabel.CENTER);

        JLabel xLabel2 = new JLabel(" x ");
        xLabel2.setHorizontalAlignment(JLabel.CENTER);

        JLabel cmLabel = new JLabel(" cm ");
        cmLabel.setHorizontalAlignment(JLabel.CENTER);

        JButton generateButton = new JButton("Target Directory");

        // Add action listeners
        browseButton.addActionListener(this);
        browseIndex.addActionListener(this);
        generateButton.addActionListener(this);

        browsePanel.add(browseButton);
        browsePanel.add(browseIndex);

        // Add components to panels
        controlPanel.add(new JLabel("Datei: "));
        controlPanel.add(fileNameTextField);
        controlPanel.add(new JLabel("Bild Name: "));
        controlPanel.add(imageDisplayNameTextField);

        // first row
        picSizePanel.add(breiteLabel);
        picSizePanel.add(new JLabel(" ")); // Placeholder, assuming you want to keep the layout
        picSizePanel.add(hoeheLabel);
        picSizePanel.add(new JLabel(" ")); // Placeholder, assuming you want to keep the layout
        picSizePanel.add(tiefeLabel);
        picSizePanel.add(new JLabel(" ")); // Placeholder, assuming you want to keep the layout

        // second row
        picSizePanel.add(breiteTextField);
        picSizePanel.add(xLabel1);
        picSizePanel.add(hoeheTextField);
        picSizePanel.add(xLabel2);
        picSizePanel.add(tiefeTextField);
        picSizePanel.add(cmLabel);

        centerPanel.add(controlPanel);
        centerPanel.add(picSizePanel);

        mainPanel.add(browsePanel, BorderLayout.NORTH);
        mainPanel.add(centerPanel, BorderLayout.CENTER);
        mainPanel.add(generateButton, BorderLayout.SOUTH);

        // Add main panel to frame
        add(mainPanel);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getActionCommand().equals("Browse Image")) {
            JFileChooser fileChooser = new JFileChooser();
            fileChooser.setDialogTitle("Select Image");
            fileChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
            fileChooser.setAcceptAllFileFilterUsed(false);
            fileChooser.addChoosableFileFilter(new FileNameExtensionFilter("Image Files", "jpg", "jpeg", "png", "gif"));

            int returnValue = fileChooser.showOpenDialog(this);
            if (returnValue == JFileChooser.APPROVE_OPTION) {
                File selectedFile = fileChooser.getSelectedFile();
                fileNameTextField.setText(selectedFile.getName());
                picFilePath = selectedFile.getAbsolutePath(); // Abrufen des absoluten Pfads der ausgewählten Datei
            }
        } else if (e.getActionCommand().equals("Browse Index.html")) {
            JFileChooser fileChooser = new JFileChooser();
            fileChooser.setDialogTitle("Select index.html");
            fileChooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
            fileChooser.setAcceptAllFileFilterUsed(false);
            fileChooser.addChoosableFileFilter(new FileNameExtensionFilter("HTML Files", "html"));

            int returnValue = fileChooser.showOpenDialog(this);
            if (returnValue == JFileChooser.APPROVE_OPTION) {
                File selectedFile = fileChooser.getSelectedFile();    // Ausgewählte Datei
                indexFilePath = selectedFile.getAbsolutePath();       // Abrufen des absoluten Pfads der ausgewählten Datei
            }
        } else if (e.getActionCommand().equals("Target Directory")) {
            String fileName = fileNameTextField.getText();
            String imageDisplayName = imageDisplayNameTextField.getText();
            String breite = breiteTextField.getText();
            String hoehe = hoeheTextField.getText();
            String tiefe = tiefeTextField.getText();

            // Generate HTML code
            String htmlCode =   "\t\t\t<div class=\"gallery-item\">\n" +
                                "\t\t\t\t<img src=\"" + fileName + "\" alt=\"" + fileName + "\" onclick=\"showImage(this)\">\n" +
                                "\t\t\t\t<div class=\"overlay\">\n" +
                                "\t\t\t\t\t\t\t\t<div class=\"text\">" + imageDisplayName + "<br>" + breite + "x" + hoehe + "x" + tiefe + " cm</div>\n" +
                                "\t\t\t\t\t\t</div>\n" +
                                "\t\t\t</div>\n";
            
            // Teil des Codes, der den Zielordner auswählt
            JFileChooser directoryChooser = new JFileChooser();
            directoryChooser.setDialogTitle("Wählen Sie den Zielordner");
            directoryChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
            directoryChooser.setAcceptAllFileFilterUsed(false);
            int returnValue = directoryChooser.showOpenDialog(this);
            File targetDirectory = null;
            if (returnValue == JFileChooser.APPROVE_OPTION) {
                targetDirectory = directoryChooser.getSelectedFile();
            } else {
                JOptionPane.showMessageDialog(this, "Kein Ordner ausgewählt", "Fehler", JOptionPane.ERROR_MESSAGE);
                return; // Beenden, wenn kein Ordner ausgewählt wurde
            }
            // Teil des Codes, der die index.html und die Bilddatei im ausgewählten Ordner speichert
            if (targetDirectory != null) {
                try {
                    // Speichern der Bilddatei im ausgewählten Ordner
                    File sourceImageFile = new File(picFilePath); // fileName sollte den Pfad zur ursprünglichen Bilddatei enthalten
                    File destImageFile = new File(targetDirectory, sourceImageFile.getName());
                    Files.copy(sourceImageFile.toPath(), destImageFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

                    // Speichern der index.html im ausgewählten Ordner
                    File inputHtmlFile = new File(indexFilePath);             // Annahme: index.html befindet sich im selben Verzeichnis wie das Programm
                    File htmlFile = new File(targetDirectory, "index.html");  // index.html wird im ausgewählten Ordner gespeichert
                    BufferedReader reader = new BufferedReader(new FileReader(inputHtmlFile));
                    StringBuilder stringBuilder = new StringBuilder();
                    String line;
                    boolean insertCompleted = false;
                    while ((line = reader.readLine()) != null) {
                        if (!insertCompleted && line.trim().equals("<!-- Insert New Content Here -->")) {
                            stringBuilder.append(htmlCode).append("\n");
                            insertCompleted = true;
                        }
                        stringBuilder.append(line).append("\n");
                    }
                    reader.close();

                    BufferedWriter writer = new BufferedWriter(new FileWriter(htmlFile));
                    writer.write(stringBuilder.toString());
                    writer.close();

                    // Erstellen eines Backup-Verzeichnisses auf dem Desktop und Kopieren der index.html-Datei
                    String userHome = System.getProperty("user.home"); // Benutzer-Home-Verzeichnis ermitteln
                    File desktop = new File(userHome, "Desktop"); // Pfad zum Desktop
                    File backupTargetDirectory = new File(desktop, "Index-Backup"); // Zielverzeichnis im neuen Ordner auf dem Desktop

                    // Überprüfen, ob das Backup-Verzeichnis existiert, und es erstellen, falls es nicht existiert
                    if (!backupTargetDirectory.exists()) {
                        if (backupTargetDirectory.mkdirs()) {
                            JOptionPane.showMessageDialog(this, "Ordner wurde erfolgreich erstellt: " + backupTargetDirectory.getAbsolutePath(), "Erfolg", JOptionPane.INFORMATION_MESSAGE);
                        } else {
                            JOptionPane.showMessageDialog(this, "Ordner konnte nicht erstellt werden.", "Fehler", JOptionPane.ERROR_MESSAGE);
                            return; // Beenden, wenn der Ordner nicht erstellt werden konnte
                        }
                    }

                    // Generieren eines eindeutigen Dateinamens mit Zeitstempel
                    // Inside your method, replace the uniqueFileName generation with this
                    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH_mm_ss");
                    String date = dateFormat.format(new Date()); // Current date
                    String uniqueFileName = "index_" + date + ".html"; // Filename with date
                    File outputBackupHtmlFile = new File(backupTargetDirectory, uniqueFileName);

                    // Kopieren der index.html in das Zielverzeichnis
                    Files.copy(inputHtmlFile.toPath(), outputBackupHtmlFile.toPath(), StandardCopyOption.REPLACE_EXISTING);

                    JOptionPane.showMessageDialog(this, "HTML-Code generiert und zur index.html hinzugefügt");
                } catch (IOException ex) {
                    JOptionPane.showMessageDialog(this, "Fehler beim Hinzufügen des HTML-Codes zur Datei: " + ex.getMessage(), "Fehler", JOptionPane.ERROR_MESSAGE);
                }
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            HTMLCodeGenerator generator = new HTMLCodeGenerator();
            generator.setVisible(true);
        });
    }
}
