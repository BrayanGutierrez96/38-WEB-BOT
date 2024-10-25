class Products{
    constructor(name, price, category){
        this.name = name
        this.price = price
        this.category = category

    }

    showDetails(){
        console.log("Product: " + this.name + "\nPrice: " + this.price + "\nCategory: " + this.category)
    }

    applyDiscount(discount){
        console.log("Original Price: " + this.price + "\nWith discount: " + (this.price * (discount/100)))
    }
}

class FisicProduct extends Products{
    constructor(name, price, category, sizeKg, dimensions){
        super(name, price, category)
        this.sizeKg = sizeKg
        this.dimensions = dimensions
    }

    calcSending(){
        console.log("Sending cost will be: " + (this.sizeKg*5) + "$")
    }

    showDetails(){
        console.log("Product: " + this.name + "\nPrice: " + this.price + "\nCategory: " + this.category + "\nSizeKG: " + this.sizeKg + "\nDimensions: " + this.dimensions)
    }
}

class DigitalProduct extends Products{
    constructor(name, price, category, sizeMB){
        super(name, price, category)
        this.sizeMB = sizeMB
    }

    showFileSize(){
        console.log("File size is: " + this.sizeMB)
    }

    applyLicense(license){
        console.log("The license \"" + license + "\" has been applied to " + this.name)
    }

    showDetails(){
        console.log("Product: " + this.name + "\nPrice: " + this.price + "\nCategory: " + this.category + "\nSizeMB: " + this.sizeMB)
    }
}

shirt = new FisicProduct("Camiseta NodeJS", 1000, "Camisas Programacion", 5, "30x55")
shirt.showDetails()
shirt.calcSending()
shirt.applyDiscount(50)

course = new DigitalProduct("Curso NodeJS", 10000, "Cursos Programacion", "12MB")
course.showDetails()
course = new DigitalProduct("Curso NodeJS", 10000, "Cursos Programacion", "12MB")
course.showDetails()
course.applyDiscount(25)
course.showFileSize()
course.applyLicense("MIT")