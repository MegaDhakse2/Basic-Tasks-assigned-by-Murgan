$card_id = 0;

$(function(){

    // initial total_cart_value
    $("#total_cart_value").text($net_quantity); 
    // initial footer values
    Reuse.update_total_foot_bar($net_total, $shipping_charge, $total_product_price_tax, $total_product_price);

});

function add_cart(){
    Cart.new_product();
    
  }
 

  