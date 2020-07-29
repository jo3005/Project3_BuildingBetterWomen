const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://heroku_bbw_stduser:dziewczynka2020@bbwcluster.kch4c.mongodb.net/bbwcontent?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }); 

// This file empties the Books collection and inserts the books below

const Contents = [{
  topic:"money",
  type: "Approved Supplier",
  headingText: "Carbon Group",
  logoUrl:"https://carbongroup.com.au/assets/images/logo.svg",
  author:"",
  subtitle:"Accountants & Bookkeepers",
  contentText:"",
  url: "https://carbongroup.com.au/",
  links:[],
  graphics:"",
  tags:["Accounting","Tax","Financial Planning","Insurance"],
  include:true

},
{topic:"money",
  type: "Approved Supplier",
  headingText: "Cornish Wealth Management",
  logoUrl:"https://perthfinancialplanning.com.au/wp-content/uploads/2018/12/Cornish.png",
  author:"",
  subtitle:"Financial Planning",
  contentText:"",
  url: "https://perthfinancialplanning.com.au/",
  links:[],
  graphics:"",
  tags:["Financial planning","Insurance","Superannuation & Retirement","Investing"],
  include:true},

  {
  topic:"money",
  type: "Government Website",
  headingText: "Moneysmart.gov.au",
  logoUrl:"https://static.moneysmart.gov.au/nextgen/img/header-logo-color.svg",
  author:"Australian Government",
  subtitle:"Free Financial Advice",
  contentText:"We help Australians take control of their money and build a better life with free tools, tips and guidance.",
  url: "https://moneysmart.gov.au/budgeting/how-to-do-a-budget",
  links:[],
  graphics:"",
  tags:["Financial Advice","Insurance","Budgeting & Saving","Superannuation & Retirement","Investing","Loans,Credit & Debt","Banking"],
  include:true
  },

  {
    topic:"practical",
    type: "Magazine article",
    headingText: "10 Safety tips for amateur DIY home projects",
    logoUrl:"../../assets/images/sheknows_logo.png",
    author:"Michelle Borboa",
    subtitle:"",
    contentText:"",
    url: "https://www.sheknows.com/living/articles/815515/10-home-safety-tips-for-amateur-diy-home-projects-1/",
    links:[],
    graphics:"",
    tags:["Safety","Home Improvement"],
    include:true
    },

    
  {
    topic:"practical",
    type: "Commercial Website Post",
    headingText: "Home Safety and Ways to Promote It",
    logoUrl:"https://www.safehomeservices.com.au/wp-content/uploads/2020/07/newshslogo2.jpg",
    author:"",
    subtitle:"",
    contentText:"",
    url: "https://www.safehomeservices.com.au/promote-home-safety/",
    links:[],
    graphics:"",
    tags:["Safety","Home Improvement"],
    include:true
    }
    ,
    {
      topic:"practical",
      type: "Commercial Website Post",
      headingText: "DIY must-haves: The tools every homeowner needs for their toolkit",
      logoUrl:"https://static.domain.com.au/domainblog/uploads/2018/03/12154006/houzz_logo_new.png",
      author:"Susan Stieglitz on Houzz Australia",
      subtitle:"",
      contentText:"If you love tools or just need to stock a basic toolbox, here are the top 20 necessary items to get your DIY project done. How many do you have?",
      url: "https://www.domain.com.au/living/every-homeowners-20-must-tools/",
      links:[],
      graphics:"",
      tags:["Home improvement","Tools"],
      include:true
      }
      ,
    {
      topic:"money",
      type: "Professional Association Post",
      headingText: "Investment Basics",
      logoUrl:"",
      author:"Australian Investors Assocation",
      subtitle:"",
      contentText:"",
      url: "https://www.investors.asn.au/education/investment-basics/",
      links:[],
      graphics:"",
      tags:["Investing"],
      include:true
      },
      {
      topic:"legal",
      type: "Government Website",
      headingText: "Family Court of Australia",
      logoUrl:"",
      author:"",
      subtitle:"",
      contentText:"The Family Court of Australia, through its specialist judges and staff, assists Australians to resolve their most complex legal family disputes. ",
      url: "http://www.familycourt.gov.au/wps/wcm/connect/fcoaweb/home",
      links:[],
      graphics:"",
      tags:["Divorce","Child Support","Parenting Orders","Property Settlement","Family Law"],
      include:true
      },
      {
        topic:"legal",
        type: "Government Website",
        headingText: "Legal Aid of WA",
        logoUrl:"https://www.legalaid.wa.gov.au/themes/custom/legalaid/logo.svg",
        author:"",
        subtitle:"Providing legal assistance for Western Australians",
        contentText:"Legal Aid WA provides a wide range of services for family law and children's matters. The majority of family and children's matters are heard in the Family Court of WA and the Children's Court at Perth. However, nearly all of our regional offices can provide advice and representation to people involved in protection and care applications, and on a range of family law issues. ",
        url: "http://www.familycourt.gov.au/wps/wcm/connect/fcoaweb/home",
        links:[],
        graphics:"",
        tags:["Family Law"],
        include:true
      },
      {
        topic:"legal",
        type: "Government Website",
        headingText: "Family Relationships Online",
        logoUrl:"https://www.familyrelationships.gov.au/sites/all/themes/familyrelationships/images/fro-icon-192.png",
        author:"",
        subtitle:"",
        contentText:"Information for all families – whether together or separated – about family relationship issues.  Find out about a range of services to assist families manage relationship issues, including helping families agree on arrangements for children after parents separate.",
        url: "https://www.familyrelationships.gov.au",
        links:[],
        graphics:"",
        tags:["Family Law","Dispute Resolution","Counselling"],
        include:true
      },
      {
        topic:"legal",
        type: "Government Website",
        headingText: "Amica - Smart, simple, Separation",
        logoUrl:"https://www.legalaid.wa.gov.au/themes/custom/legalaid/logo.svg",
        author:"",
        subtitle:"Empowers separating couples to resolve their family law disputes online",
        contentText:"amica is a ground-breaking new digital service that empowers separating couples to resolve their family law disputes online. amica uses artificial intelligence technology to suggest a split of assets, based on the kinds of agreements reached by other couples in similar circumstances, and how courts generally handle similar disputes. amica can also assist parents to develop a parenting plan for their children. Until 1 January 2021, couples can use the amica service for free. ",
        url: "https://www.legalaid.wa.gov.au/news/amica-online-separation-tool",
        links:[],
        graphics:"",
        tags:["Family Law"],
        include:true
      },
      
      {
        topic:"mentalhealth",
        type: "Charity",
        headingText: "Lifeline",
        logoUrl:"https://www.lifeline.org.au/media/cukcvs4f/logo-lifeline.svg",
        author:"",
        subtitle:"Providing 24/7 Crisis Support - Call 13 11 14",
        contentText:"You are not alone. We're here to listen. Every 30 seconds, a person in Australia reaches out to Lifeline for help.  We are a national charity providing all Australians experiencing emotional distress with access to 24 hour crisis support and suicide prevention services. We exist so that no person in Australia has to face their darkest moments alone.",
        url: "https://www.legalaid.wa.gov.au/news/amica-online-separation-tool",
        links:[],
        graphics:"",
        tags:["Suicide Prevention","Crisis Support"],
        include:true
      },
      {
        topic:"practical",
        type: "Magazine article",
        headingText: "The Power Drill",
        logoUrl:"https://www.primermagazine.com/wp-content/uploads/2019/05/Primer-Logo.png",
        author:"Jesse Stern, Primer",
        subtitle:"",
        contentText: "The go-to for many around-the-house projects, the power drill can also do the most damage. We'll make sure you get it right.",
        url: "https://www.primermagazine.com/2012/learn/the-power-drill-a-modern-mans-guide-to-tools",
        links:['http://www.primermagazine.com/wp-content/uploads/2012/01/Powerdrill/Powerdrill_Bits.jpg',
        'http://www.primermagazine.com/wp-content/uploads/2012/01/Powerdrill/Powerdrill_Diagram.jpg'],
        graphics:"",
        tags:["Home maintenance","Tools"],
        include:true
      },
      {
        topic:"legal",
        type: "Web store",
        headingText: "Lawpath",
        logoUrl:"https://assets.lawpath.com/images/logos/Lawpath_logo_b_h.png",
        author:"",
        subtitle:"All your legal needs in one place",
        contentText: "Create more than 250 legal and business documents using our easy to use document builder. Our platform also allows you to eSign, share and manage your legal documents all within your secure online platform. Your first document is free!",
        url: "https://lawpath.com.au/",
        links:[''],
        graphics:"",
        tags:["Legal documents"],
        include:true
      },
      {
        topic:"legal",
        type: "Government Website",
        headingText: "Child support estimator",
        logoUrl:"https://processing.csa.gov.au/estimator/Images/header/csalogo.jpg",
        author:"",
        subtitle:"",
        contentText: "You can use this estimator service to calculate an estimate of your child support payments.",
        url: "https://processing.csa.gov.au/estimator/About.aspx/",
        links:[''],
        graphics:"",
        tags:["Legal documents","Child Support"],
        include:true
      },
      
      {
        topic:"mentalhealth",
        type: "Online blog",
        headingText: "The Art of Coping: Strategies and Skills to Help Your Clients Cope",
        logoUrl:"https://positivepsychology.com/wp-content/themes/ppp/img/pp-logo-v2-2x.png",
        author: "Jeremy Sutton, Ph.D.",
        subtitle:"Positive Psychology",
        contentText: "Can't cope? Overwhelmed? Stressed? We all have trouble coping at some points in life. We don't get the promotion we hoped for; our relationship breaks down; a presentation is overdue. Whether you cope or not depends on how you think. Stress—a feeling of emotional or physical tension—arises from how you interpret life’s events as they unfold.",
        url: "https://positivepsychology.com/coping-strategies-skills/",
        links:[''],
        graphics:"",
        tags:["Resilience & Coping"],
        include:true
      },
      {
        topic:"mentalhealth",
        type: "Online blog",
        headingText: "76 Most Powerful Mindfulness Quotes: Your Daily Dose of Inspiration",
        logoUrl:"https://positivepsychology.com/wp-content/themes/ppp/img/pp-logo-v2-2x.png",
        author: " Joaquín Selva, Bc.S., Psychologist",
        subtitle:"Positive Psychology",
        contentText: "No matter how established your personal mindfulness practice is, sometimes you can use a little extra inspiration.",
        url: "https://positivepsychology.com/mindfulness-quotes/",
        links:[''],
        graphics:"",
        tags:["Mindfulness"],
        include:true
      },
      {
        topic:"practical",
        type: "Suggested Supplier",
        headingText: "De Rosa Auto Repairs",
        logoUrl:"https://www.derosaautorepairs.com.au/wp-content/uploads/2018/12/Untitled-2.png",
        author: "",
        subtitle:"The best in auto repairs for Perth's drivers since 1975",
        contentText: "John and his team of seven dedicated auto repairers, technicians and admin staff are ready to help drivers with their automotive needs, whatever make or model you drive. We pride ourselves on having been able to help drivers for as long as we have – any workshop open for 45 years has only done so by earning the trust of its customers.",
        url: "https://www.derosaautorepairs.com.au/",
        links:[''],
        graphics:"",
        tags:["Car repairs"],
        include:true
      },
      {
        topic:"practical",
        type: "Suggested Supplier",
        headingText: "VPR Mechanical",
        logoUrl:"",
        author: "",
        subtitle:"The best in auto repairs for Perth's drivers since 1975",
        contentText: "No Probs Mechanical has over 25 years’ experience in the trade specializing in all makes and models. We offer a wide range of garage services. You can rely on us to provide you the best customer experience. All our work is guaranteed, bringing your vehicle back to its former condition. We do not charge premium prices, a fair price is charged for a premium service and we will beat any written quote (no older than 30 days).",
        url: "",
        links:[''],
        graphics:"",
        tags:["Car repairs"],
        include:true
      },
      {
        topic:"practical",
        type: "Suggested Supplier",
        headingText: "Perth Mech Mobile Mechanics",
        logoUrl:"https://static.wixstatic.com/media/b9a427_f8c144f8ae96434988009368c90ffcc9~mv2.jpg/v1/crop/x_1,y_0,w_485,h_149/fill/w_270,h_83,al_c,q_80,usm_0.66_1.00_0.01/PMECH%20NEW.webp",
        author: "",
        subtitle:"The best in auto repairs for Perth's drivers since 1975",
        contentText: "Perth Mech is not just your standard mechanical service. We thrive to be the best and provide our customers with the ultimate service standard in the industry. There is no dealing with service advisors, parts interpreter or several mechanics. You will be dealing directly with your own personal mechanic. This provides a rare personal experience. If you have a problem or need to explain the vehicle symptoms the message will not get lost. If you have question or query regarding the servicing or repairs you can have the luxury of having it resolved or sorted out on the spot.",
        url: "https://www.perthmech.com.au/",
        links:[''],
        graphics:"",
        tags:["Car repairs"],
        include:true
      },
      {
        topic:"jobs",
        type: "Suggested Supplier",
        headingText: "Wise Owl Resumes & Business Solutions",
        logoUrl:"https://static.wixstatic.com/media/069cc7_bfccd9a3cf5f485cbcdf9d543cf64de4~mv2.png/v1/fill/w_129,h_128,al_c,q_85,usm_0.66_1.00_0.01/069cc7_bfccd9a3cf5f485cbcdf9d543cf64de4~mv2.webp",
        author: "Amy Milnes",
        subtitle:"",
        contentText: "In the current employment market competition is fierce... Do you need a professional RESUME written by someone who understands how hard it is  to get a job and who really wants you to succeed?      I have had experience working closely with Recruitment and Management teams, seeing what goes on 'behind the scenes' in the hiring process in both the 'high vis/ blue collar' construction site world as well as the 'white collar' business/ corporate world.",
        url: "https://www.wiseowlresumes.com/",
        links:[''],
        graphics:"",
        tags:["Resume Advice"],
        include:true
      },
    
      {
        topic:"jobs",
        type: "Suggested Supplier",
        headingText: "Skills for your career",
        logoUrl:"https://skillsforyourcareer.com/wp-content/uploads/2017/01/Cropped.png",
        author: "Loretta",
        subtitle:"",
        contentText: "We help individuals who are ready and motivated to take the next level in their careers.",
        url: "https://skillsforyourcareer.com/",
        links:[''],
        graphics:"",
        tags:["Resume Advice"],
        include:true
      },
      
    
      {
        topic:"jobs",
        type: "Online business blogpost",
        headingText: "What to wear to an interview, really",
        logoUrl:"",
        author: "Seek",
        subtitle:"",
        contentText: "Wowed your dream employer with a great resume and scored yourself an interview? It’s time to knock their socks off in person and make a great first impression! Preparation is the key to nailing it and securing the role, so now’s the time to do your research, think about any tricky questions you might encounter, and put together your very best hire-me interview outfit.",
        url: "https://www.seek.com.au",
        links:[''],
        graphics:"",
        tags:["Resume Advice"],
        include:true
      }
    



];

db.Content
  .remove({})
  .then(() => db.Content.collection.insertMany(Contents,{setDefaultsOnInsert:true}))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
