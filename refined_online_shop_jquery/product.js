$tax_amount = 0;
$product_price_including_quantity = 0;
$net_quantity = 0;
$shipping_charge = 0;
$total_product_price_tax = 0;
$total_product_price = 0;
$net_total = 0;

class Product{
    
    constructor(product_name, product_price, quantity, tax, card_id ){
      this.product_name = product_name
      this.product_price = product_price
      this.quantity = quantity
      this.tax = tax
      this.card_id = card_id
    }

     alert_and_console_base_values(){
        alert("product_name:" + this.product_name + " \n product_price:" + this.product_price + " \n quantity:" + this.quantity + typeof(this.quantity) + " \n tax:" + this.tax + "\n card_id" + parseInt(this.card_id));
        // console.log("product_name:" + product_name + " \n product_price:" + product_price + " \n quantity:" + quantity + typeof(quantity) + " \n tax:" + tax + "\n card_id" + card_id );
    }

     append_cart_with_data(){

     console.log("append_cart_with_data is calling");
     console.log("card_id : " + this.card_id);
     
     const cards_array = [];
     var appending_html_card =`
     <div id="${this.card_id}" class="card" style="width: 30rem;">
         <div>
             <span> Product : </span> 
              <span id="p_name"> ${this.product_name} </span> &nbsp;
             <span> Quantity : </span> 
              <span id="quant"> ${this.quantity} </span>&nbsp
             <span> Tax : </span> 
              <span id="gst"> ${Product.product_tax_amount(this.product_price, this.quantity, this.tax)} </span>  &nbsp;
             <span>  Price : </span> 
              <span id="p_price"> ${this.product_price} </span> &nbsp;         
             <span>
             <button class="btn btn-outline-danger btn-sm" onclick="Product.remove_cart_with_data(${this.card_id},  ${this.quantity}, ${$tax_amount}, ${this.product_price * this.quantity})">del
             </button>
             </span>
             <span> <button class="btn btn-outline-info btn-sm" id="edit_button" data-toggle="modal" data-target="#exampleModalCenter" >edit</button> </span>
 
         </div>
    </div>`;
     
    cards_array[this.card_id] = appending_html_card;

    $(".cards_appending_div").append(cards_array[this.card_id]);   
    }
     
    product_price_including_quantity(product_price, quantity){
      $product_price_including_quantity = product_price * quantity;
      return $product_price_including_quantity;
    }

    static product_tax_amount(product_price, quantity, tax){
    $tax_amount = product_price * quantity * tax * 1/100 ;
    console.log(product_price);
    return $tax_amount;
    }
    
    total_cart_value(){
      $net_quantity += this.quantity;
      $("#total_cart_value").text($net_quantity);
      // return $net_quantity;
    console.log("$net_quantity :" + $net_quantity);
    }

    total_foot_bar(){
      $product_price_including_quantity = this.product_price * this.quantity;
      $total_product_price_tax += $tax_amount; 
      $total_product_price += $product_price_including_quantity;
      $net_total = $total_product_price + $total_product_price_tax;
      console.log("total product price TAX is(inside total bar) " + $total_product_price_tax);
      console.log("total product PRICE  is(inside total bar) " + $total_product_price);
      Reuse.update_total_foot_bar($net_total, $shipping_charge, $total_product_price_tax, $total_product_price);

    }

    
    static remove_cart_with_data(card_id, quantity, tax_amount, product_price_including_quantity){
      console.log( "removing card_id from cart:" + card_id);
      $("#" + card_id).remove();
      $net_quantity -= quantity;
      $total_product_price_tax -= tax_amount;
      $total_product_price -= product_price_including_quantity ;
      $net_total = $total_product_price + $total_product_price_tax ;

      Reuse.update_total_cart($net_quantity);
      Reuse.update_total_foot_bar($net_total, $shipping_charge, $total_product_price_tax, $total_product_price);
      
    }

    static edit_cart_with_data(card_id){
      this.product_name = $("#product_name").val();
      this.product_price = parseInt($("#product_price").val());
      this.quantity = parseInt($("#quantity").val());
      this.tax = parseInt($("#GST").val());
      console.log("edit cart with data is accessible" + "card_id :" + card_id + "product_name :" + this.product_name + " " + this.product_price + " " + this.quantity + " " + this.tax);
      $("#p_name").text(this.product_name);
    }
    
    
}




