class Product
{
    constructor(name, price, category)
    {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    showDetails() 
    {
        console.log(this.name + "\nprecio: " + this.price + "\ncategoría: " + this.category);
    }

    applyDiscount(discount)
    {
        if (discount < 0 || discount > 100)
        {
            console.log("Número de descuento inválido");
            return;
        }
        console.log("el precio del producto con descuento es: " + (this.price - (this.price * (discount/100))));
    }
}

class PhysicProduct extends Product
{
    constructor(name, price, category, weight, size) 
    {
        super(name, price, category);
        this.weight = weight;
        this.size = size;
    }

    sendingCost(cost)
    {
        console.log("El coste de envío es " + cost + " pesos por cada kg (" + this.weight + "): " + (cost * this.weight));
    }

    showDetails()
    {
        super.showDetails();
        console.log("peso: " + this.weight + "kg\ndimensiones: " + this.size);        
    }
}

class DigitalProduct extends Product
{
    constructor(name, price, category, size)
    {
        super(name, price, category);
        this.size = size;
    }

    showSize()
    {
        console.log("tamaño del archivo: " + this.size);
    }

    applyLicence(type)
    {
        console.log("Licencia aplicada al producto: " + type);
    }

    showDetails()
    {
        super.showDetails();
        this.showSize();
    }
}

p1 = new ("lata", 100, "bebestible");Product

pp1 = new PhysicProduct(p1.name, p1.price, p1.category, 10, "10x5x5 cm");
dp1 = new DigitalProduct("Ilustrator", 2000, "aplicación", "10GB");

console.log(p1);
console.log(pp1);
console.log(dp1);

p1.showDetails();
p1.applyDiscount(15);

pp1.showDetails();
pp1.sendingCost(20);
pp1.applyDiscount(10);

dp1.showDetails();
dp1.applyLicence("Privada");
dp1.applyDiscount(50);