
abstract class ReportService {
  // report method to write specific filetypes and save to dir
  abstract report(): void;
};

class PdfService extends ReportService {

  public report() {
    // generate report in PDF format
  };
};

class CsvService extends ReportService {

  public report() {
    // generate report in csv format
  };
};

// creating a pdf reporter:
const pdfReporter = new PdfService();
pdfReporter.report();

// creating a service for a new format:

class XlsService extends ReportService {

  public report() {
    // generate report in xls format

  }
}

const xlsReporter = new XlsService();
xlsReporter.report();