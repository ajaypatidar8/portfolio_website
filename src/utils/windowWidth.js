export function windowHandler(width) {
    let pdfWidth = 1.5;
  
    if (width <= 375) pdfWidth = 0.55;
    else if (width <= 425) pdfWidth = 0.6;
    else if (width <= 575) pdfWidth = 0.8;
    else if (width <= 700) pdfWidth = 0.9;
    else if (width <= 768) pdfWidth = 1.1;
    else if (width <= 1024) pdfWidth = 1.4;
    // else if (width <= 1440) pdfWidth = 1.5;
    // else pdfWidth = 1.5;
  
    return pdfWidth;
  }