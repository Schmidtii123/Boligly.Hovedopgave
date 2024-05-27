import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/FrontPageView.vue')
    },// Ejendomsmægler og forside
    {
      path: '/log-in/realtor',
      name: 'log-in/realtor',
      component: () => import('../views/LogInRealtorView.vue')
    }
    ,
    {
      path: '/leads',
      name: 'leads',
      component: () => import('../views/LeadsView.vue')
    }
    ,
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import('../views/FakturaListeView.vue')
    }
    ,
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue')
    }
    ,
    {
      path: '/sign-up/realtor',
      name: 'sign-up-realtor',
      component: () => import('../views/SignUpRealtorView.vue')
    },
   
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/QuestionView.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../views/AddressView.vue')
    },
    {
      path: '/my-address',
      name: 'my-address',
      component: () => import('../views/MyAddressView.vue')
    }
    ,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
    ,
    {
      path: '/realtor',
      name: 'realtor',
      component: () => import('../views/RealtorView.vue')
    }
    ,
    {
      path: '/new-user',
      name: 'new-user',
      component: () => import('../views/NewUserView.vue')
    }
    ,
    {
      path: '/new-profile',
      name: 'new-profile',
      component: () => import('../views/ProfileInfoView.vue'),
    },
    ,
    {
      path: '/faq/realtor',
      name: 'faq/realtor',
      component: () => import('../views/FaqRealtorView.vue')
    },
    {
      path: '/my-address/new-address',
      name: 'my-address/new-address',
      component: () => import('../views/NewAddressView.vue')
    }
    ,
    {
      path: '/my-address/settings',
      name: 'my-address/settings',
      component: () => import('../views/NewAddressSettingView.vue')
    }
    ,// Sælger
    {
      path: '/seller',
      name: 'seller',
      component: () => import('../views/SellerDashboardView.vue')
    }
    ,
    {
      path: '/seller/adresse',
      name: 'seller-adresse',
      component: () => import('../views/SellerAdresseView.vue')
    }
    ,
    {
      path: '/seller/leads',
      name: 'seller-leads',
      component: () => import('../views/SellerLeadsView.vue')
    }
    ,
    {
      path: '/seller/chat',
      name: 'seller-chat',
      component: () => import('../views/SellerChatView.vue')
    }
    ,
    {
      path: '/seller/faq',
      name: 'seller/faq',
      component: () => import('../views/SellerFaqView.vue')
    }
    ,
    {
      path: '/seller/my-adresse',
      name: 'seller/my-adresse',
      component: () => import('../views/SellerMyAdresseView.vue')
    }
    ,
    {
      path: '/seller/setting',
      name: 'seller/setting',
      component: () => import('../views/SellerMyAdresseSettingView.vue')
    }
    ,
    {
      path: '/sign-up/seller',
      name: 'sign-up-seller',
      component: () => import('../views/SignUpSellerView.vue')
    },
    {
      path: '/sign-up/seller/1',
      name: 'sign-up-seller/1',
      component: () => import('../views/SignUpSeller1View.vue')
    },
    {
      path: '/sign-up/seller/2',
      name: 'sign-up-seller/2',
      component: () => import('../views/SignUpSeller2View.vue')
    },
    {
      path: '/sign-up/seller/3',
      name: 'sign-up-seller/3',
      component: () => import('../views/SignUpSeller3View.vue')
    },
    {
      path: '/log-in/seller',
      name: 'log-in/seller',
      component: () => import('../views/LogInSellerView.vue')
    }
    , // Buyer section
    {
      path: '/sign-up/buyer',
      name: 'sign-up-buyer',
      component: () => import('../views/SignUpBuyerView.vue')
    },
    {
      path: '/sign-up/buyer/1',
      name: 'sign-up-buyer-step-1',
      component: () => import('../views/SignUpBuyer1View.vue')
    },
    {
      path: '/sign-up/buyer/2',
      name: 'sign-up-buyer-step-2',
      component: () => import('../views/SignUpBuyer2View.vue')
    },
    {
      path: '/sign-up/buyer/3',
      name: 'sign-up-buyer-step-3',
      component: () => import('../views/SignUpBuyer3View.vue')
    },
    {
      path: '/buyer-list',
      name: 'buyer-list',
      component: () => import('../views/BuyerDirectoryView.vue')
    }
    ,
    {
      path: '/log-in/buyer',
      name: 'log-in/buyer',
      component: () => import('../views/LogInBuyerView.vue')
    },
    {
      path: '/buyer',
      name: 'buyer',
      component: () => import('../views/BuyerDashboardView.vue')
    }
    ,
    {
      path: '/buyer/leads',
      name: 'buyer/leads',
      component: () => import('../views/BuyerLeadsView.vue')
    }
    ,
    {
      path: '/buyer/chat',
      name: 'buyer/chat',
      component: () => import('../views/BuyerChatView.vue')
    }
    ,
    {
      path: '/buyer/chat',
      name: 'buyer/chat',
      component: () => import('../views/BuyerChatView.vue')
    }
    ,
    {
      path: '/buyer/faq',
      name: 'buyer/faq',
      component: () => import('../views/BuyerFaqView.vue')
    }
  ]
})

export default router
