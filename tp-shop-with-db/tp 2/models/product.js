class Product {
  constructor(id, img, alt, object, price, desc) {
    this.id = id;
    this.img = img;
    this.alt = alt;
    this.object = object;
    this.price = price;
    this.desc = desc;
  }

  static async getAllProducts() {
    try {
      const [rows] = await debug.execute("SELECT * FROM products");
    } catch (e) {
      console.error("Product.getAll", e.message);
    }
  }

  async;
}
