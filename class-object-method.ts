// ODM tuh Original design seperti blue print tanpa brand jadi design general secara umum
//object-oriented

class Book {
    // ini adalah atributes / properties, karena terdapat didalam class
    title: string;
    authors: string[];
    pages: number;
    papersize: string;
    fonts: string;
    genre: string;
    stock: number;
    
    // ini tuh pargiamenter untuk atributies lalu this itu untuk manggil atribut
    constructor(
    title: string,
    authors: string[],
    pages: number,
    papersize: string,
    fonts: string,
    genre: string,
    stock: number
  ) {
    this.title = title;
    this.authors = authors;
    this.pages = pages;
    this.papersize = papersize;
    this.fonts = fonts;
    this.genre = genre;
    this.stock = stock;
  }

  // ini adalah method, method itu adalah function yang ada didalam class
  getInfo(): void {
    console.log(
      `Title: ${this.title}, Authors: ${this.authors.join(", ")}, Pages: ${this.pages}, Paper Size: ${this.papersize}, Font: ${this.fonts}, Genre: ${this.genre}`
    );
  }

  borrow() {
    if (this.stock === 0) {
      throw new Error(`sorry, "${this.title}" is out of stock`);
    } 
    this.stock;
    console.log(
        `You have borrowed "${this.title}". Remaining stock: ${this.stock - 1}`,
    );
  }

  return() {
    this.stock;
    console.log(
        `You have returned "${this.title}". Remaining stock: ${this.stock}`,
    );
  }
}

// manggil variabel
// new book adalah object dari class book
const novelBook = new Book(
  "Laskar Pelangi",
  ["Andrea Hirata", "John Doe", "Jane Smith"],
  350,
  "A4",
  "Times New Roman",
  "Fiction",
    5
);

//manggil method getInfo dari object novelBook
novelBook.getInfo();
novelBook.return();