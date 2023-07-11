    class  Reuse{
     static open_form(){
    $(".user_form").css({"display":"block"});
    $("#product_name").val("");
    $("#product_price").val("");
    $("#quantity").val("1");
    $("#GST").val("1");
    }

    static update_total_foot_bar(net_total, shipping_charge, total_product_price_tax, total_product_price){
        if(net_total > 1000){
            shipping_charge = 100;
         }else{
            shipping_charge = 0;
         }
         console.log("shipping_charge" + shipping_charge);
            $(".total_tax").text(total_product_price_tax);
            $(".total_product_price").text(total_product_price);
            $(".net_total").text(net_total);
            $(".shipping_charge").text(shipping_charge);
    }

    static update_total_cart(net_quantity){
        $("#total_cart_value").text(net_quantity);
       console.log("$net_quantity :" + net_quantity);
    }
  }


