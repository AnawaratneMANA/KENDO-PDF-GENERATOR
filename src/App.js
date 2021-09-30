import {useRef} from 'react'
import './App.css';
import '@progress/kendo-theme-material/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import {PDFExport, savePDF} from "@progress/kendo-react-pdf";

function App() {

  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  }

  const handleExportWithMethod = (event) => {
    savePDF(contentArea.current, {paperSize: "A4"});
}

  return (
    <div className="app-content">
      <PDFExport ref={pdfExportComponent} paperSize="A4">
      <div className="box wide hidden-on-narrow">
                <div className="box-col">
                    <div className="header-custom-report">
                        <h4>Report Generator</h4>
                    </div>
                </div>
            </div>
            <div className="page-container hidden-on-narrow">
                <PDFExport ref={pdfExportComponent} paperSize="A4">
                    <div ref={contentArea} className={ 'pdf-page size-a4' } id="container">
                        <div className="inner-page">
                            <div className="pdf-header">
								<span className="company-logo">
								</span>
                                <span className="invoice-number">Invoice #23543</span>
                            </div>
                            <div className="pdf-footer">
                                <p>
                                    SPM Management System.<br />
                                    Learning Management Automation System.<br />
                                    Colombo, Sri Lanka, 108080.
                                </p>
                            </div>
                            <div className="addresses">
                                <div className="for">
                                    <h3>File Overview</h3>
                                    <p>
                                        This report shows the file distribution in each course.
                                    </p>
                                </div>

                                <div className="from">
                                    <h6>Tutor Department</h6>
                                    <p>
                                        Resource Management.
                                    </p>
                                    <p>
                                        Report ID: 23543<br />
                                        Invoice Date: 12.03.2014<br />
                                        Due Date: 27.03.2014
                                    </p>
                                </div>
                            </div>
                            <div className="pdf-body">
                                <div id="grid"></div>
                                <p className="signature">
                                    Signature: ________________ <br /><br />
                                    Date: 12.03.2014
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="box-col">
                        <div>Click the button to export as PDF</div>
                    </div>
            </PDFExport>
            </div>
            <div className="box wide hidden-on-narrow">
                <div className="box-col">
                    <div className="report-header-bold">Export the Report As PDF</div>
                </div>
                <div className="box-col">
                    <div>Click the button to export as PDF</div>
                    <Button  onClick={handleExportWithMethod}>Export Method jsPDF</Button>
                    <Button  primary={true} onClick={handleExportWithComponent}>Export Component</Button>
                </div>
            </div>
        </PDFExport>
    </div>
  );
}

export default App;
