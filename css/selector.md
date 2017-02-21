div, p - Selects all <div> elements and all <p> elements

div p - Selects all <p> elements that are anywhere inside a <div> element

div > p - Selects all <p> elements where the immediate parent is a <div> element

div + p - Selects all <p> elements that are placed immediately after a <div> element

div ~ p - Selects all <p> elements that are anywhere preceded by a <div> element

Select every <a> element whose href attribute value begins with "https":
    a[href^="https"]

Select every <a> element whose href attribute value ends with ".pdf":
    a[href$=".pdf"]
    
Select every <a> element whose href attribute value contains the substring "css":
    a[href*="css"]