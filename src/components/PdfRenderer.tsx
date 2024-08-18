'use client'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface PdfRendererProps {
    url: string;
}

const PdfRenderer = ({ url }: PdfRendererProps) => {

    return (
        <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
                top bar
            </div>
            <div className="flex-1 w-full max-h-screen">
                <div>
                    <Document 
                        file={url} 
                        className='max-h-full'
                        onLoadError={console.error}
                        onSourceError={console.error}>
                        <Page pageNumber={1}/>
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default PdfRenderer;