package com.apnastore.config;

import com.apnastore.model.Product;
import com.apnastore.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner initDatabase(ProductRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(Arrays.asList(
                        // Dairy, Bread & Eggs
                        new Product("Amul Buffalo A2 Milk", "Dairy, Bread & Eggs", 88.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/6032ea96-4ab2-44b4-8b46-f6bbf7cecfa7.png",
                                "1 ltr"),
                        new Product("Amul Calci+ Milk", "Dairy, Bread & Eggs", 85.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/10be8278-544a-4c72-b2b4-f8b94ed4a2da.png",
                                "1 ltr"),
                        new Product("Amul Slim 'n' Trim Skimmed Milk", "Dairy, Bread & Eggs", 85.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/c1fb14c1-2f67-4fa1-bee8-04f68c8cd8e9.png",
                                "1 ltr"),
                        new Product("Amul Taaza Homogenised Toned Milk", "Dairy, Bread & Eggs", 77.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png",
                                "1 ltr"),
                        new Product("Amul Taaza Toned Milk", "Dairy, Bread & Eggs", 16.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/852a402a-54ac-41d5-9263-187f4b077171.png",
                                "200 ml"),

                        // Fruits & Vegetables
                        new Product("Pomegranet (Anar)", "Fruits & Vegetables", 20.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1773818692702-4.png",
                                "250 g"),
                        new Product("Water Melon (Tarbooz)", "Fruits & Vegetables", 20.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1772165621532-12.png",
                                "250 g"),
                        new Product("Banana (Kela)", "Fruits & Vegetables", 20.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/3c5d2ba9-23f1-4408-8cc0-30bf0fca2269.png",
                                "500 g"),
                        new Product("Organic Banana (kela)", "Fruits & Vegetables", 23.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/b89fe4bd-2018-4502-a80e-d8dc274955b8.png",
                                "500 g"),
                        new Product("Arvi (Aalu)", "Fruits & Vegetables", 20.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/acfa1d0e-981c-48a0-b231-510f0ae9a292.png",
                                "250 g"),

                        // Cold Drinks & Juices
                        new Product("Thums Up X Force Zero Sugar Cola Soft Drink", "Cold Drinks & Juices", 40.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1770356946958-552.png",
                                "300 ml"),
                        new Product("7UP Lemon Soda Soft Drink", "Cold Drinks & Juices", 142.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6818b424-15c5-4617-817d-46078cedc4d1.png",
                                "320 ml"),
                        new Product("7UP Lime Soft Drink (2.25 l)", "Cold Drinks & Juices", 96.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a3ce3353-e77f-414b-bece-2b32ac446ad2.png",
                                "2.25 ltr"),
                        new Product("7UP Lime Soft Drink (300 ml)", "Cold Drinks & Juices", 40.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/39bedf94-c87d-4fc6-9f9d-cf6c25f451da.png",
                                "300 ml"),
                        new Product("7UP Pink Lemonade Soft Drink", "Cold Drinks & Juices", 193.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1772432009525-1662.png",
                                "330 ml"),

                        // Snacks & Munchies
                        new Product("Sweet Karam Coffee Kerala Tapioca Chips", "Snacks & Munchies", 59.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cef34695-bdd0-44d3-83a3-ddb7380bdadd.png",
                                "65 g"),
                        new Product("4700BC Cheese & Herbs Corn Popped Chips", "Snacks & Munchies", 40.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b73861e0-2b53-4f7e-86d3-904e468d0478.png",
                                "55 g"),
                        new Product("4700BC Hawaiian Barbeque Crunchy Corn", "Snacks & Munchies", 53.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e9a30ac6-3713-4487-9698-5eb6478f8fb8.png",
                                "45 g"),
                        new Product("4700BC Himalayan Salt Crunchy Corn", "Snacks & Munchies", 53.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7d8a5515-52ce-4e82-8bbc-ff442e27bac9.png",
                                "45 g"),
                        new Product("7 Diamonds Garlic & Herb Puffs", "Snacks & Munchies", 33.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/10f06256-cf1a-4506-9d1e-185cdc0ec5c4.png",
                                "75 g"),

                        // Breakfast & Instant Food
                        new Product("Kellogg's Multigrain Corn Flakes", "Breakfast & Instant Food", 137.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/rc-upload-1773116238333-693.png",
                                "450 g"),
                        new Product("Kellogg's Chocos + Real Almond Honey Corn Flakes", "Breakfast & Instant Food",
                                146.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a667f14f-c653-41cf-afa5-989b3ec60999.png",
                                "168 g + 7 pcs"),
                        new Product("Kellogg's Corn Flakes Original", "Breakfast & Instant Food", 336.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6a0ad3ae-f5f5-4a58-a9de-003d90bd8819.png",
                                "1.15 kg"),
                        new Product("Kellogg's Double Chocolaty Fills Chocos", "Breakfast & Instant Food", 169.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6610ad2b-ec7f-414e-84d9-dcbc77767e31.png",
                                "250 g"),
                        new Product("Kellogg's Froot Loops - Multigrain Cereal", "Breakfast & Instant Food", 187.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6aad9f1d-69a1-4586-8ce1-6baa72643e7b.png",
                                "285 g"),

                        // Personal Care
                        new Product("Dermicool Cooling Bath Soap for Instant Cooling", "Personal Care", 119.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5b0536ab-8dd4-4588-8bed-65f65ec8c4cf.png",
                                "4 x 75 g"),
                        new Product("Himalaya Neem & Turmeric Soap", "Personal Care", 94.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/5a87914e-c632-4541-a9a0-6c9d9fab778a.png",
                                "150 g"),
                        new Product("Biotique Basil & Parsley Revitalizing Soap", "Personal Care", 94.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/0dac5d0b-9e94-4c08-a8cf-c854f43e5bb8.png",
                                "150 g"),
                        new Product("Biotique Orange Peel Renewing Soap", "Personal Care", 94.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/8bf35bf7-f545-48e4-bc98-2ee1ad2ac630.png",
                                "150 g"),
                        new Product("Chandrika Ayurvedic Soap with 2x Coconut Oil", "Personal Care", 261.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/92fafabd-821d-45f1-a4ff-9258d663600a.png",
                                "6 x 125 g"),

                        // Home & Office
                        new Product("JK Easy Copier A4 Sheets (70 GSM)", "Home & Office", 359.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/483811c1-cafe-4596-8eb7-eddc4038a6c8.png",
                                "500 sheets"),
                        new Product("Classmate 6 Subject Single Line Notebook (A4)", "Home & Office", 180.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f507f688-ae36-4f2a-86b3-385f575f692d.png",
                                "1 pc (300 pages)"),
                        new Product("Creative Space A4 Sheets (75 GSM)", "Home & Office", 60.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/440033a8-e0d9-4b8c-8606-b5cdc582daab.png",
                                "20 pcs"),
                        new Product("Wingz Premium A4 Coloured Sheets", "Home & Office", 149.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/96e3106c-05bb-429e-b1b2-b84acd09c089.png",
                                "100 sheets"),
                        new Product("Creative Space Assignment A4 Sheets", "Home & Office", 60.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1771991783673-334.png",
                                "20 sheets"),

                        // Atta, Rice & Dal
                        new Product("Aashirvaad Atta", "Atta, Rice & Dal", 258.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/d54667e8-c5df-4fa5-a685-b6dbfa1dd8e6.png",
                                "5 kg"),
                        new Product("Daawat Rozana Super Basmati Rice", "Atta, Rice & Dal", 470.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/e9d2b11d-0cae-4926-8161-086424e939d5.png",
                                "5 kg"),
                        new Product("Tata Sampann Unpolished Toor Dal", "Atta, Rice & Dal", 186.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1773718842673-772.png",
                                "1 kg"),
                        new Product("Basic Arhar/Toor Dal", "Atta, Rice & Dal", 142.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/30d568a1-c12d-4aa4-9405-c2e8ada1dde0.png",
                                "1 kg"),
                        new Product("Toor Dal", "Atta, Rice & Dal", 33.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/10e2287b-b293-43c4-8570-ff9eb409b1eb.png",
                                "500 g"),

                        // Cleaning Essentials
                        new Product("Harpic Disinfectant Liquid Bathroom Cleaner (Lemon)", "Cleaning Essentials", 359.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/7ea14805-4916-4be7-a82a-c09641638ed6.png",
                                "2 ltr"),
                        new Product("Lizol Disinfectant Surface & Floor Cleaner", "Cleaning Essentials", 169.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/f8b94f6e-14b3-4719-a5ea-5525f47743e8.png",
                                "625 ml"),
                        new Product("Harpic Disinfectant Toilet Bleach", "Cleaning Essentials", 115.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/4ae6ba45-4339-4880-83cd-ffa2aa5ef4e7.png",
                                "500 ml"),
                        new Product(
                                "Good Knight Flash Liquid Vaporiser Mosquito Repellent Refill (2 x 45 ml) - Pack of 2",
                                "Cleaning Essentials", 61.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/83b17ea5-c7ae-487b-8efe-2ea80f9db5a9.png",
                                "2 x 50 g"),
                        new Product("Harpic Disinfectant Liquid Toilet Cleaner - (Original)", "Cleaning Essentials",
                                151.0,
                                "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/rc-upload-1772682797673-156.png",
                                "400 ml")));
            }
        };
    }
}
