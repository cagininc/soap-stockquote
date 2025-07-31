export function jsonToXml(rootTag: string, data: Record<string, any>): string {
    let xml = `<${rootTag}>`;
  
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        xml += `<${key}>${data[key]}</${key}>`;
      }
    }
  
    xml += `</${rootTag}>`;
    return xml;
  }
  