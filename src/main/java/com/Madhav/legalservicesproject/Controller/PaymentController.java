package com.Madhav.legalservicesproject.Controller;

import com.Madhav.legalservicesproject.Service.PaypalService;
import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("LegalServices")
@CrossOrigin(origins = "http://localhost:63342")
public class PaymentController {
    @Autowired
    private PaypalService paypalService;
    @GetMapping("/payment")
    public String home(){
        return "PaymentIndex";
    }
    @PostMapping("/payment/create")
    public RedirectView createPayment(
            @RequestParam("method")String method,
            @RequestParam("amount")String amount,
            @RequestParam("currency")String currency,
            @RequestParam("description")String description
    ){
        try{
            String cancelUrl = "http://localhost:8080/LegalServices/payment/cancel";
            String successUrl = "http://localhost:8080/LegalServices/payment/success";
            Payment payment = paypalService.createPayment(
                    Double.valueOf(amount),
                    currency,
                    method,
                    "sale",
                    description,
                    cancelUrl,
                    successUrl
            );
            for(Links links : payment.getLinks()){
                if(links.getRel().equals("approval_url")){
                    return new RedirectView(links.getHref());
                }
            }
        }catch (PayPalRESTException e){
            log.error("ERROR Occurred: " + e);
        }
        return new RedirectView("/LegalServices/payment/error");
    }
    @GetMapping("/payment/success")
    public String paymentSuccess(
            @RequestParam("paymentId")String paymentId,
            @RequestParam("PayerID")String payerId
    ){
        try{
            Payment payment = paypalService.executePayment(paymentId,payerId);
            if(payment.getState().equals("approved")){
                return "paymentSuccess";
            }
        }catch (PayPalRESTException e){
            log.error("Error occurred: "+ e);
        }
        return "paymentSuccess";
    }
    @GetMapping("/payment/cancel")
    public String paymentCancel(){
        return "paymentCancel";
    }
    @GetMapping("/payment/error")
    public String paymentError(){
        return "paymentError";
    }
}
