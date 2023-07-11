
class Cart{
    
    static new_product(){
    if(!$("#product_name").val()){
        alert("product NAME must be filled");
        } else if (!$("#product_price").val()){
        alert("product PRICE must be filled");    
        }else if ($("#GST").val() > 20){
        alert("Tax percentage must be below 20");    
        } else{
                //get_product_details
                var product_name = $("#product_name").val();
                var product_price = parseInt($("#product_price").val());
                var quantity = parseInt($("#quantity").val());
                var tax = parseInt($("#GST").val());
                
                $card_id++;
                //creating product object on Project class
                const product = new Product(product_name, product_price, quantity, tax, $card_id);
                
                product.alert_and_console_base_values();
                product.append_cart_with_data();
                product.total_cart_value();
                product.total_foot_bar();
                console.log(product);
        }
    }
}