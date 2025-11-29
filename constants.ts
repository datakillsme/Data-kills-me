
import { Product, GhostRequest, User } from './types';

export const MOCK_CURRENT_USER: User = {
  id: 'u1',
  name: 'Tuan Nguyen',
  email: 'tuan.k60@ftu.edu.vn',
  isVerified: true,
  trustScore: 98,
  avatar: 'https://picsum.photos/id/64/200/200',
  cohort: 'K60',
  itemsSold: 42,
  responseTime: '< 1 Hour',
  joinedDate: 'Sep 2023'
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    sellerId: 'u2',
    sellerName: 'Minh Anh',
    title: 'International Economics (12th Ed)',
    price: 150000,
    image: 'https://picsum.photos/id/24/400/300',
    condition: 'Like New',
    includesNotes: true,
    description: 'Used for one semester. Includes my summary notes for the final exam.',
    category: 'Textbooks',
    status: 'Available',
    type: 'SELLING'
  },
  {
    id: 'p2',
    sellerId: 'u3',
    sellerName: 'Hoang Le',
    title: 'Principles of Marketing',
    price: 80000,
    image: 'https://picsum.photos/id/366/400/300',
    condition: 'Good',
    includesNotes: false,
    description: 'Some highlighter marks, but completely readable.',
    category: 'Textbooks',
    status: 'Available',
    type: 'SELLING'
  },
  {
    id: 'p3',
    sellerId: 'u4',
    sellerName: 'Lan Pham',
    title: 'Advanced Mathematics for Business',
    price: 50000,
    image: 'https://picsum.photos/id/20/400/300',
    condition: 'Fair',
    includesNotes: true,
    description: 'Cover is slightly worn. Selling cheap.',
    category: 'Textbooks',
    status: 'Available',
    type: 'SELLING'
  },
  {
    id: 'p4',
    sellerId: 'u5',
    sellerName: 'Duc Tran',
    title: 'Business Law Syllabus 2025',
    price: 45000,
    image: 'https://picsum.photos/id/1060/400/300',
    condition: 'Like New',
    includesNotes: false,
    description: 'Bought by mistake, never used.',
    category: 'Syllabus',
    status: 'Available',
    type: 'SELLING'
  }
];

export const MOCK_REQUESTS: GhostRequest[] = [
  {
    id: 'r1',
    requesterId: 'u10',
    bookTitle: 'Microeconomics Vol 2',
    description: 'Looking for the latest edition, highlighted is fine.',
    preferredCondition: 'Good',
    budget: 'Under 60k',
    isAnonymous: true,
    timestamp: new Date()
  },
  {
    id: 'r2',
    requesterId: 'u11',
    bookTitle: 'French for Beginners',
    description: 'Need it for Ms. Hoa class.',
    preferredCondition: 'Any',
    budget: 'Any',
    isAnonymous: true,
    timestamp: new Date()
  }
];

export const LOCATION_CHIPS = [
  { label: '📍 Meet at Gate A', text: 'Let\'s meet at FTU Gate A.' },
  { label: '📍 Meet at Library Lobby', text: 'I\'ll wait for you at the Library Lobby.' },
  { label: '📍 Meet at Canteen', text: 'Let\'s grab a table at the Canteen.' },
];

export const TRANSLATIONS = {
  en: {
    login: {
      title: "FTU-Swap Hub",
      subtitle: "Privacy for Buyers. Verification for Sellers.",
      emailLabel: "FTU Email",
      emailPlaceholder: "student.id@ftu.edu.vn",
      passwordLabel: "Password",
      passwordPlaceholder: "••••••••",
      submitButton: "Login with FTU ID",
      verifying: "Verifying Student ID...",
      errorDomain: "Access denied. Please use your official @ftu.edu.vn email.",
      emailHelp: "Must be a valid @ftu.edu.vn address",
      footer: "By logging in, you agree to the Community Safety Guidelines."
    },
    navbar: {
      searchPlaceholder: "Search textbooks, notes...",
      verifiedStudent: "Verified Student"
    },
    sidebar: {
      menuTitle: "Main Menu",
      home: "Home",
      requests: "Ghost Requests",
      chat: "Messages",
      profile: "Profile",
      support: "Support & Guidelines"
    },
    home: {
      heroTitle: "Find textbooks. Save money.",
      heroSubtitle: "No drama.",
      heroDesc: "Verified FTU students only. Safe campus meetups.",
      ghostTitle: "Can't find it?",
      ghostButton: "Post Buying Request",
      ghostCta: "Create Request",
      newArrivals: "New Arrivals",
      filter: "Filter",
      postRequestTitle: "Post a Buying Request",
      postRequestDesc: "Tell sellers what you need & your budget."
    },
    productDetail: {
      back: "Back to Feed",
      description: "Description",
      seller: "Seller",
      verification: "Verification",
      category: "Category",
      chatToBuy: "Chat to Buy",
      safeConnect: "Safe Connect: No personal phone number required.",
      safetyTitle: "FTU Safety Guarantee",
      safetyDesc: "Meet on campus. Verify item before paying. This seller is a verified student.",
      includesNotes: "Includes Free Notes 📝"
    },
    chat: {
      verified: "Verified FTU Student",
      swapping: "Swapping:",
      typeMessage: "Type a message...",
      send: "Send",
      partner: "Chat Partner"
    },
    ghostModal: {
      title: "Create Buying Request",
      subtitle: "Let sellers come to you.",
      labelItem: "What are you looking for?",
      placeholderItem: "e.g., Macroeconomics Textbook...",
      labelDesc: "Additional Details (Optional)",
      placeholderDesc: "e.g., I need it by Monday, highlighted is okay...",
      labelCondition: "Preferred Condition",
      labelBudget: "Your Budget (Optional)",
      placeholderBudget: "e.g., Under 50k",
      hideIdentity: "Post Anonymously?",
      hideIdentityDesc: "If checked, your name is hidden (Ghost Mode). Uncheck to post publicly.",
      submit: "Post Request",
      conditions: {
        any: "Any Condition",
        new: "Like New",
        good: "Good",
        fair: "Fair"
      },
      modeNormal: "Normal Mode",
      modeGhost: "Ghost Mode",
      shyPrompt: "Shy? Click here to post anonymously.",
      revealPrompt: "Currently Anonymous. Click to show identity.",
      postingAs: "Posting as:"
    },
    requests: {
      title: "Buyer Requests",
      newRequest: "+ New Request",
      budget: "Budget:",
      negotiable: "Negotiable",
      postedBy: "Posted by:",
      iHaveThis: "I have this!",
      anonymousUser: "2nd Year Student",
      user: "User",
      anonymousTag: "Anonymous"
    },
    profile: {
      header: "Seller Reputation",
      verifiedStudent: "Verified Student",
      safeScore: "Safe Score",
      verifiedBy: "Verified by FTU-Swap Hub",
      itemsSold: "Items Sold",
      responseTime: "Response Time",
      joined: "Joined",
      viewFull: "View Full Profile",
      logout: "Log Out",
      badges: {
        fast: "Fast Responder",
        reliable: "Reliable Seller",
        longTerm: "Long-term Member"
      }
    },
    support: {
      title: "Support & Policies",
      subtitle: "Feel safe, stay informed.",
      supportInfo: {
        title: "Support Center",
        helpCenter: "Help Center / FAQs",
        report: "Report a Problem",
        email: "Email: support@ftu-swaphub.vn",
        liveChat: "Chat with Support (Coming Soon)",
        tipsTitle: "Safety Tips",
        tip1: "Meet in safe, public locations on campus",
        tip2: "Double-check item condition",
        tip3: "Never share sensitive personal info",
        tip4: "Use verified FTU email"
      },
      policies: {
        title: "Platform Policies",
        seller: {
          title: "Seller Guidelines",
          desc: "Must provide accurate descriptions & respond timely."
        },
        buyer: {
          title: "Buyer Protection",
          desc: "Priority support for verified transactions & mediation."
        },
        privacy: {
          title: "Privacy Policy",
          desc: "Personal data protected. Ghost Mode for privacy."
        },
        community: {
          title: "Community Standards",
          desc: "Respectful communication. Zero tolerance for scams."
        }
      },
      quickActions: {
        viewPolicies: "View All Policies",
        submitReport: "Submit a Safety Report",
        requestReview: "Request Account Review",
        deleteData: "Delete My Data"
      }
    }
  },
  vi: {
    login: {
      title: "FTU-Swap Hub",
      subtitle: "Riêng tư cho người mua. Xác thực cho người bán.",
      emailLabel: "Email FTU",
      emailPlaceholder: "ma_sv@ftu.edu.vn",
      passwordLabel: "Mật khẩu",
      passwordPlaceholder: "••••••••",
      submitButton: "Đăng nhập bằng FTU ID",
      verifying: "Đang xác thực...",
      errorDomain: "Truy cập bị từ chối. Vui lòng sử dụng email @ftu.edu.vn chính thức.",
      emailHelp: "Vui lòng sử dụng địa chỉ email @ftu.edu.vn hợp lệ",
      footer: "Bằng cách đăng nhập, bạn đồng ý với Quy định an toàn cộng đồng."
    },
    navbar: {
      searchPlaceholder: "Tìm giáo trình, tài liệu...",
      verifiedStudent: "Sinh viên đã xác thực"
    },
    sidebar: {
      menuTitle: "Menu Chính",
      home: "Trang chủ",
      requests: "Yêu cầu mua",
      chat: "Tin nhắn",
      profile: "Tài khoản",
      support: "Hỗ trợ & Quy định"
    },
    home: {
      heroTitle: "Tìm giáo trình. Tiết kiệm tiền.",
      heroSubtitle: "Không rắc rối.",
      heroDesc: "Chỉ dành cho sinh viên FTU. Gặp gỡ an toàn tại trường.",
      ghostTitle: "Không tìm thấy?",
      ghostButton: "Đăng yêu cầu mua",
      ghostCta: "Tạo yêu cầu",
      newArrivals: "Mới về",
      filter: "Bộ lọc",
      postRequestTitle: "Đăng yêu cầu mua",
      postRequestDesc: "Bạn cần tìm gì? Hãy để người bán liên hệ."
    },
    productDetail: {
      back: "Quay lại",
      description: "Mô tả",
      seller: "Người bán",
      verification: "Xác thực",
      category: "Danh mục",
      chatToBuy: "Chat để mua",
      safeConnect: "Kết nối an toàn: Không cần số điện thoại cá nhân.",
      safetyTitle: "Đảm bảo an toàn FTU",
      safetyDesc: "Gặp gỡ tại trường. Kiểm tra hàng trước khi trả tiền. Người bán là sinh viên đã xác thực.",
      includesNotes: "Tặng kèm ghi chú 📝"
    },
    chat: {
      verified: "Sinh viên FTU",
      swapping: "Đang trao đổi:",
      typeMessage: "Nhập tin nhắn...",
      send: "Gửi",
      partner: "Người lạ"
    },
    ghostModal: {
      title: "Tạo Yêu cầu Mua",
      subtitle: "Để người bán tìm đến bạn.",
      labelItem: "Bạn đang tìm gì?",
      placeholderItem: "vd: Giáo trình Kinh tế vĩ mô...",
      labelDesc: "Chi tiết thêm (Tùy chọn)",
      placeholderDesc: "vd: Cần gấp vào thứ 2, sách cũ cũng được...",
      labelCondition: "Tình trạng mong muốn",
      labelBudget: "Ngân sách (Tùy chọn)",
      placeholderBudget: "vd: Dưới 50k",
      hideIdentity: "Đăng ẩn danh?",
      hideIdentityDesc: "Tên bạn sẽ hiển thị là \"Sinh viên năm 2\" (Chế độ Ghost). Bỏ tích để hiện tên thật.",
      submit: "Đăng yêu cầu",
      conditions: {
        any: "Mọi tình trạng",
        new: "Như mới",
        good: "Tốt",
        fair: "Khá"
      },
      modeNormal: "Chế độ Thường",
      modeGhost: "Chế độ Ẩn danh",
      shyPrompt: "Ngại ngùng? Bấm vào đây để đăng ẩn danh.",
      revealPrompt: "Đang ẩn danh. Bấm để hiện danh tính.",
      postingAs: "Đăng dưới tên:"
    },
    requests: {
      title: "Yêu cầu mua",
      newRequest: "+ Tạo yêu cầu",
      budget: "Ngân sách:",
      negotiable: "Thương lượng",
      postedBy: "Đăng bởi:",
      iHaveThis: "Tôi có món này!",
      anonymousUser: "Sinh viên năm 2",
      user: "Người dùng",
      anonymousTag: "Ẩn danh"
    },
    profile: {
      header: "Hồ sơ người bán",
      verifiedStudent: "Sinh viên đã xác thực",
      safeScore: "Điểm tin cậy",
      verifiedBy: "Xác thực bởi FTU-Swap Hub",
      itemsSold: "Đã bán",
      responseTime: "Phản hồi",
      joined: "Tham gia",
      viewFull: "Xem hồ sơ đầy đủ",
      logout: "Đăng xuất",
      badges: {
        fast: "Phản hồi nhanh",
        reliable: "Người bán uy tín",
        longTerm: "Thành viên lâu năm"
      }
    },
    support: {
      title: "Hỗ trợ & Quy định",
      subtitle: "An toàn - Minh bạch - Tin cậy",
      supportInfo: {
        title: "Trung tâm hỗ trợ",
        helpCenter: "Câu hỏi thường gặp (FAQs)",
        report: "Báo cáo sự cố",
        email: "Email: support@ftu-swaphub.vn",
        liveChat: "Chat hỗ trợ (Sắp ra mắt)",
        tipsTitle: "Mẹo an toàn",
        tip1: "Gặp gỡ ở nơi công cộng trong trường",
        tip2: "Kiểm tra kỹ tình trạng món hàng",
        tip3: "Không chia sẻ thông tin nhạy cảm",
        tip4: "Sử dụng email FTU đã xác thực"
      },
      policies: {
        title: "Quy định nền tảng",
        seller: {
          title: "Quy định người bán",
          desc: "Mô tả chính xác, trung thực & phản hồi nhanh."
        },
        buyer: {
          title: "Bảo vệ người mua",
          desc: "Hỗ trợ ưu tiên & trung gian hòa giải."
        },
        privacy: {
          title: "Chính sách riêng tư",
          desc: "Bảo mật dữ liệu. Chế độ Ẩn danh an toàn."
        },
        community: {
          title: "Tiêu chuẩn cộng đồng",
          desc: "Tôn trọng, văn minh. Nghiêm cấm lừa đảo."
        }
      },
      quickActions: {
        viewPolicies: "Xem tất cả quy định",
        submitReport: "Gửi báo cáo an toàn",
        requestReview: "Yêu cầu xem xét tài khoản",
        deleteData: "Xóa dữ liệu cá nhân"
      }
    }
  }
};