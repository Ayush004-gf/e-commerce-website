// LangConfig.jsx
import { ManageAccounts, Reviews } from "@mui/icons-material";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize language
const savedLang = localStorage.getItem("lang");
const defaultLang = savedLang || "en";

// Define translations
const resources = {
  en: {
    translation: {
      font: "font-poppins",
      dir: "ltr",
      topHeader:
        "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      shop: "ShopNow",
      welcome: "Welcome to the E-Commerce Website",

      home: "Home",
      contact: "Contact",
      about: "About",
      signUp: "Sign Up",
      account: "My Account",

      headerIcons: {
        1: "Manage My Account",
        2: "My Order",
        3: "My Cancellations",
        4: "My Reviews",
        5: "Logout",
      },
      search: "Search...",
      homeSections: {
        row1: {
          col1: [
            "Women's Fashion",
            "Men's Fashion",
            "Technology",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ],
          col2: ["iPhone 14 Series", "Up to 10% off Voucher", "Shop Now"],
        },
        row2: ["Today’s", "Flash Sales", "Days", "Hours", "Minutes", "Seconds"],
      },
      removeFromCart: "Remove from Cart",
      addToCart: "Add to Cart",
      new: "NEW",
      itemsArray: {
        0: {
          title: "Kids Electric Car",
          type: "Gaming",
          details:
            "An exciting electric car for kids to drive around in style, providing hours of entertainment and fun.",
        },
        1: {
          title: "CANON EOS DSLR Camera",
          type: "Technology",
          details:
            "Capture stunning photos and videos with this professional-grade Canon DSLR camera, perfect for photography enthusiasts.",
        },
        2: {
          title: "Breed Dry Dog Food",
          type: "General",
          details:
            "Nutritious dry dog food to keep your furry friend healthy and happy, made with high-quality ingredients.",
        },
        3: {
          title: "ASUS FHD Gaming Laptop",
          type: "Technology",
          details:
            "Experience high-performance gaming with this ASUS FHD gaming laptop, featuring advanced graphics and smooth gameplay.",
        },
        4: {
          title: "Curology Product Set",
          type: "General",
          details:
            "A complete skincare set by Curology to cleanse, moisturize, and protect your skin, leaving it soft and radiant.",
        },
        5: {
          title: "GP11 Shooter USB Gamepad",
          type: "Gaming",
          details:
            "Enhance your gaming experience with the GP11 Shooter USB gamepad, featuring high-quality construction and precise controls.",
        },
        6: {
          title: "Quilted Satin Jacket",
          type: "Clothes",
          details:
            "Stay stylish and warm with this quilted satin jacket, perfect for adding a trendy touch to your outfit.",
        },
        7: {
          title: "Small Bookshelf",
          type: "General",
          details:
            "Organize your books and decorative items neatly with this small bookshelf, designed to fit in compact spaces.",
        },
        8: {
          title: "RGB Liquid CPU Cooler",
          type: "Technology",
          details:
            "Keep your CPU cool and running smoothly with the RGB liquid CPU cooler, featuring a high-performance pump and customizable RGB lighting.",
        },
        9: {
          title: "Gucci Duffle Bag",
          type: "Clothes",
          details:
            "Travel in style with the Gucci duffle bag, crafted from premium materials and designed for durability and luxury.",
        },
        10: {
          title: "The North Coat",
          type: "Clothes",
          details:
            "Stay warm and fashionable with The North Coat, featuring a durable construction and timeless design.",
        },
        11: {
          title: "HAVIT HV-G92 Gamepad",
          type: "Gaming",
          details:
            "Enjoy responsive and precise gaming controls with the HAVIT HV-G92 gamepad, designed for hours of gaming fun.",
        },
        12: {
          title: "AK-900 Wired Keyboard",
          type: "Technology",
          details:
            "Type with speed and accuracy using the AK-900 wired keyboard, featuring a durable construction and ergonomic design.",
        },
        13: {
          title: "IPS LCD Gaming Monitor",
          type: "Technology",
          details:
            "Immerse yourself in gaming with the IPS LCD gaming monitor, delivering vibrant visuals and smooth gameplay.",
        },
        14: {
          title: "S-Series Comfort Chair",
          type: "Clothes",
          details:
            "Relax in comfort with the S-Series comfort chair, featuring ergonomic design and plush cushioning for long hours of sitting.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "New Arrival",
          details:
            "Experience powerful sound with the JBL Boombox 2, featuring a rugged design and long battery life for all-day listening.",
        },
        16: {
          title: "perfume",
          type: "New Arrival",
          details:
            "This perfume is a blend of oud, rose, and incense, creating a rich and luxurious scent that lasts all day.",
        },
        17: {
          title: "Phone",
          type: "New Arrival",
          details:
            "This phone features a large display, powerful processor, and long battery life, perfect for work and play.",
        },
        18: {
          title: "PlayStation 5",
          type: "New Arrival",
          details:
            "The black and white version of the PS5 is coming out on sale.",
        },
        19: {
          title: "Speaker",
          type: "New Arrival",
          details: "Amazing sound quality with the Amazon wireless speaker.",
        },
        20: {
          title: "Women's Collections",
          type: "New Arrival",
          details:
            "Women's collections are featured that give you another vibe, and you can find the best collections here.",
        },
        21: {
          title: "Football Shoes",
          type: "New Arrival",
          details:
            "The best football shoes for your game, and you can find the best collections here.",
        },
      },
      categories: {
        general: "General",
        technology: "Technology",
        gaming: "Gaming",
        clothes: "Clothes",
        newArrival: "New Arrival",
      },
      services: {
        0: {
          value: "FREE AND FAST DELIVERY",
          description: "Free delivery for all orders over $140 ",
        },

        1: {
          value: "24/7 CUSTOMER SERVICE",
          description: "Friendly 24/7 customer support",
        },
        2: {
          value: "MONEY BACK GUARANTEE",
          description: "We reurn money within 30 days",
        },
      },
      redButtons: {
        viewAllProducts: "View All Products",
        viewAll: "View All",
        exploreByCategory: "Explore By Category",
        buyNow: "Buy Now",
        sendMassage: "Send Massage",
        createAccount: "Create Account",
        login: "Log In",
        applyCoupon: "Apply Coupon",
        processToCheckout: "Process to checkout",
        placeOrder: "Place Order",
        backToHomePage: "Back to home page",
        chooseByCategory: "Choose By Category",
      },
      whiteButtons: {
        backToHomePage: "Back to Home Page",
        loadMore: "Load More..",
        moveAllToBag: "Move All to Bag",
        seeAll: "See All",
        returnToShop: "Return to Shop",
        updateCart: "Update Cart",
      },

      wishlist: {
        title: "Wishlist",
        justForYou: "Just for you",
      },
      cart: {
        header: {
          product: "Product",
          price: "Price",
          quantity: "Quantity",
          subtotal: "Subtotal",
        },
        cartTotal: "Cart Total",
        total: "Total",
        subtotal: "Subtotal",
        shipping: "Shipping",
        free: "Free",
      },
      checkOut: {
        title: "Checkout",
        billingDetails: "Billing Details",
        firstName: "First Name",
        company: "Company Name",
        Country: "Country",
        address: "Street Address",
        city: "Town / City",
        phone: "Phone",
        email: "Email Address",
        apartment: "Apartment, floor, etc. (optional)",
        methods: "Payment Methods",
        bank: "Bank (Visa)",
        cash: "Cash on Delivery",
        couponCode: "Coupon Code",
      },
      payment: {
        payment: "Payment Details",
        number: "Card Number",
        enter: "Enter your card number",
        expirationDate: "Expiration Date",
      },
      productPage: {
        relatedItems: "Related Items",
        colors: "Colors",
        size: "Size",
        inStock: "In Stock",
        reviews: "Reviews",
        review: "Review",
        1: "Free Delivery",
        1.1: "Enter your postal code for Delivery Availability",
        2: "Return Delivery",
        2.1: "Free 30 Days Delivery Returns.Details",
      },
      contactPage: {
        call: "Call To Us",
        available: "We are available 24/7, 7 days a week.",
        phone: "Phone",
        write: "Write To US",
        fillForm: "Fill out our form and we will contact you within 24 hours.",
        emails: "Emails",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourPhone: "Your Phone Number",
        yourMessage: "Your Message",
      },
      aboutPage: {
        title: "About",
        story: "Our Story",
        paragraph1:
          "Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.",
        paragraph2:
          "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.",
        card1: "Sellers active on our site",
        card2: "Monthly Product Sales",
        card3: "Customers active on our site",
        card4: "Annual gross sale on our site",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "Tom Cruise",
        name2: "Tom Hanks",
        name3: "Will Smith",
        name4: "Tom Hardy",
        job1: "Founder & Chairman",
        job2: "CTO",
        job3: "CEO",
        job4: "Product Designer",
      },
      accountPage: {
        setMassage: "Account details updated successfully!",
        welcome: "Welcome! ",
        home: "Home",
        myAccount: "My Account",
        ManageMyAccount: "Manage My Account",
        myProfile: "My Profile",
        addressBook: "Address Book",
        myPaymentOptions: "My Payment Options",
        myOrders: "My Orders",
        myReturns: "My Returns",
        myCancelations: "My Cancelations",
        myWishlist: "My Wishlist",
        editYourProfile: "Edit Your Profile",
        firstName: "First Name",
        yourFirstName: "your first name",
        lastName: "Last Name",
        yourLastName: "your last name",
        email: "Email",
        yourEmail: "your email",
        address: "Address",
        yourAddress: "your address",
        passwordChanges: "Password Changes",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        cancel: "Cancel",
        saveChanges: "Save Changes",
      },

      signUpPage: {
        title: "Create an account",
        enter: "Enter your details below:",
        email: "Email",
        password: "Password",
        createAccount: "Create Account",
        withGoogle: "Sign up with Google",
        haveAccount: "Already have an account?",
        login: "Log in",
      },
      loginPage: {
        title: "Log in to Exclusive",
        enter: "Enter your details below:",
        emailOrPhone: "Email or Phone Number",
        password: "Password",
        forgot: "Forgot Password?",
        notHaveAccount: "Don't have an account?",
        login: "Log In",
      },
      Snackbar: {
        inCart: "Items already in the cart!",
        movedToCart: "Items moved to the cart successfully!",
        noItems: "No items to move to the cart!",
      },
      category: {
        redTitle: "Categories",
        title: "Browse By Category",
        categories: {
          0: "Phones",
          1: "Computers",
          2: "SmartWatch",
          3: "Camera",
          4: "HeadPhones",
          5: "Gaming",
        },
      },
      bestSelling: {
        redTitle: "This Month",
        title: "Best Selling Products",
      },
      deal: {
        greenTitle: "Categories",
        title: "Enhance Your Listening Experience",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        buyNow: "Buy Now!",
      },
      allProducts: {
        redTitle: "Our Products",
        title: "Explore Our Products",
        byCategory: "Explore By Category",
      },
      featured: {
        redTitle: "Featured",
        title: "New Arrival",
        shopNow: "Shop Now",
        playStation: {
          title: "PlayStation 5",
          description: "Black and White version of the PS5 coming out on sale.",
        },
        WomenCollections: {
          title: "Women’s Collections",
          description: "Featured woman collections that give you another vibe.",
        },
        speakers: {
          title: "Speakers",
          description: "Amazon wireless speakers",
        },
        perfume: {
          title: "Perfume",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "Subscribe",
        offer: "Get 10% off your first order",
        enterEmail: "Enter your email",
        enterPassword: "Enter your password",
        account: "Account",
        myAccount: "My Account",
        sign: "Login / Register",
        cart: "Cart",
        wishlist: "Wishlist",
        shop: "Shop",
        downloadApp: "Download App",
        save: "Save $3 with App New User Only",
        support: "Support",
        address: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh",
        quickLinks: "Quick Links",
        privacy: "Privacy Policy",
        usage: "Terms Of Use",
        FAQ: "FAQ",
        Contact: "Contact",
        copyrights: "© Copyright Rimel 2022. All rights reserved",
        allRightsReserved: "© All rights reserved",
      },
    },
  }
};

// Initialize i18n
i18n.use(initReactI18next).init({
  lng: defaultLang,
  resources,
  keySeparator: ".",
  interpolation: { escapeValue: false },
});

export default i18n;
