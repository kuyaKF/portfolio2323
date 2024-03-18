$(function() {

	$(document).on("click",".modal",function(event){

		if (!$(event.target).closest(".modal-panel").length > 0) {
			$('body').removeClass("modal-active");
			$('.modal .upper-text').text('');
			$('.modal .modal-inner').text('');
		}
		
	});

	$(document).on("click",".modal-close",function(){

		$('body').removeClass("modal-active");
		
	});

	$(document).on("click",".modal-open",function(){
		let modal = $(this).data("modal");
		let check = 0;
		let text,upper;

		switch (modal) {
		  case 'refund':
		    upper='Refunds & Returns';
		    text='<p>At Nike, we stand by the quality and performance of our products. If for any reason you are not completely satisfied with your purchase, we offer a hassle-free refund and return policy to ensure your utmost satisfaction.</p>\
					<h2 class="s-sh">Refunds:</h2>\
					<p>We are committed to ensuring 100% customer satisfaction. If you are unhappy with your purchase for any reason, we will refund your purchase price in full, no questions asked. You do not need to return the product to us to receive your refund.</p>\
					<h2 class="s-sh">Returns:</h2>\
					<p>If you wish to exchange your product for a different color, we are happy to accommodate your request. Simply return the original product to us, and we will facilitate the exchange free of charge.</p>\
					<h2 class="s-sh">How to Initiate a Refund or Exchange:</h2>\
					<p>To request a refund or exchange, please contact our customer service team during our business hours:</p>\
					<p>Telephone: +44 2076604453\
						<br/>Email: support@nike.com</p>\
					<h2 class="s-sh">Our customer service hours are as follows:</h2>\
					<p>Monday-Friday: 08:00-17:00\
						<br/>Saturday: 09:00-17:00\
						<br/>Sunday: 09:00-17:00</p>\
					<h2 class="s-sh">Our Address:</h2>\
					<p>Nike Customer Service\
						<br/>236 Oxford St, London W1C 1DE\
						<br/>United Kingdom</p>\
					<p>Please provide your order details when contacting us, and our dedicated team will promptly assist you with your refund or exchange request.</p>\
					<p>At Nike, we strive to provide unparalleled customer service and ensure your satisfaction with every purchase. Thank you for choosing Nike.</p>';

		    break;
		  case 'privacy':
		    upper='Privacy Policy';
		    text='<p>This privacy policy describes the personal data collected or generated (processed) when you interact with Nike through our websites, digital experiences, mobile applications, stores, events, or one of our other products or services, all of which are part of Nike’s Platform (“Platform”). It also explains how your personal data is used, shared and protected, what choices you have relating to your personal data and how you can contact us.</p>\
				<p class="s-sh">WHO is Responsible for the Processing of Your Personal Data?</p>\
				<p>The Nike entity responsible for the processing of your personal data will depend on how you interact with Nike’s Platform and where you are located in the world. The relevant Nike entity are referred to as “Nike”, “our”, “we” or “us” in this privacy policy.</p>\
				<p>Please review our List of Local Entities for the name of the Nike entity responsible and the appropriate contact information.</p>\
				<p class="s-sh">WHAT Personal Data Do We Collect and WHEN?</p>\
				<p>We ask you for certain personal data to provide you with the products or services you request. For example, when you make purchases, contact our consumer services, request to receive communications, create an account, participate in our events or contests, or use our Platform. Additionally, when you request specific services in store, we may ask you to login to provide services that are then associated with your account (e.g. size, fit, preferences).</p>\
				<p class="s-sh">This personal data includes your:</p>\
				<ul>\
					<li>contact details including name, email, telephone number and shipping and billing address;</li>\
					<li>login and account information, including screen name, password and unique user ID;</li>\
					<li>personal details including gender, hometown, date of birth and purchase history;</li>\
					<li>payment or credit card information;</li>\
					<li>images, photos and videos;</li>\
					<li>data on physical characteristics, including weight, height, and body measurements (such as estimated stride and shoe/foot measurements or apparel size);</li>\
					<li>fitness activity data provided by you or generated through our Platform (time, duration, distance, location, calorie count, pace/stride); or</li>\
					<li>personal preferences including your wish list as well as marketing and cookie preferences.</li>\
				</ul>\
				<p>We collect additional personal data from you to enable particular features within our Platform. For example, we request access to your phone’s location data to log your run route, your contacts to allow you to interact with your friends, your calendar to schedule a training plan or your social network credentials to post content from our Platform to a social network. This personal data includes your:</p>\
				<ul>\
					<li>movement data from your device’s accelerometer;</li>\
					<li>photos, audio, contacts and calendar information;</li>\
					<li>sensor data, including heart rate and (GPS) location data; or</li>\
					<li>social network information, including credentials and any information from your public posts about Nike or your communications with us.</li>\
				</ul>\
				<p>When interacting with our Platform, certain data is automatically collected from your device or web browser. More information about these practices is included in the “Cookies and Pixel Tags” section of this privacy policy below. This data includes:</p>\
				<ul>\
					<li>Device IDs and type, call state, network access, storage information and battery information;</li>\
					<li>Traffic data about your visit to and interactions with our Platform, including products you viewed, added to your cart or searched for and whether you are logged-in to your Nike account;</li>\
					<li>Cookies, IP addresses, referrer headers, data identifying your web browser and version, web beacons, tags and interactions with our Platform.</li>\
				</ul>\
				<p class="s-sh">KIDS</p>\
				<p>We comply with local laws and do not allow children to register on our Platform when they are under the legal age limit of the country in which they reside. We will ask for parental consent for children participating in Nike experiences and events.</p>\
				<p class="s-sh">TOOLS to Manage What Personal Data We Collect</p>\
				<p>When using our Platform we also provide in-time notice or obtain consent for certain practices. For example, we will obtain consent to use your location or send push notifications. We may obtain this consent through the Platform or using the standard permissions available on your device.</p>\
				<p>In many cases, your web browser or mobile device platform will provide additional tools to allow you to control when your device collects or shares particular categories of personal data. For example, your mobile device or web browser may offer tools to allow you to manage cookie usage or location sharing. We encourage you to familiarize yourself with and use the tools available on your devices.</p>\
				<p class="s-sh">WHY and HOW Do We Use Your Personal Data?</p>\
				<p class="s-sh">We use your personal data in the following ways:</p>\
				<p class="s-sh">To Provide the Features of the Platform and Services You Request</p>\
				<p>When you use our Platform, we will use your personal data to provide the requested product or service. For example, if you make a purchase on Nike.com or participate in an event or promotion, we will use the contact information you give us to communicate with you about the purchase, event or promotion. If you contact our consumer services, we will use information about you, such as delivery or payment information, or the product you have purchased to help you resolve a problem or question.</p>\
				<p>If you use our Platform to track your fitness activity or physical characteristics, we will collect this personal data and store it so that you can review it in the Platform. Your fitness activity data may include data you enter about your activity or data collected by your device during your activity such as location data and movement data. We may use this activity data to calculate further information about your activity, such as distance run, or calories burned, so that the calculated information can be provided to you as part of the functionality of the Platform.</p>\
				<p>In many cases, to use particular features within our Platform you may need to provide Nike with additional data or additional consent to use particular data in a certain way. For example, to use the heart rate tracking features of our Platform, you may need to connect to a heart rate monitoring device. Similarly, to share content on social media, you may be required to provide your social media account credentials to sign in.</p>\
				<p class="s-sh">To Communicate Information about our Products, Services, Events and for Other Promotional Purposes</p>\
				<p>When you consent, we will send you marketing communications and news concerning Nike’s products, services, events and other promotions that may be of interest to you. You can opt-out at any time after you have given your consent.</p>\
				<p class="s-sh">Direct Marketing</p>\
				<p>If you are an existing customer of Nike (for example, if you have placed an order with us), we may use the contact details you provided to send you marketing communications about similar Nike products or services where permitted by applicable law (unless you have opted-out). In other cases, we ask for your consent to send you marketing information.</p>\
				<p class="s-sh">Personalization</p>\
				<p>We may use the information that you provide to us as well as information from other Nike products or services - such as your use of Nike’s Platform, your visits to or purchases made in Nike stores, your participation in Nike events and contests - to personalize communications on products and services that may be interesting for you. In doing so, we may combine the information you provide to us with information that we create about your online activity, including internal insights and analysis. Where required by applicable law, we will obtain your consent to conduct these activities.  </p>\
				<p>If you sign-in to your Nike account using different devices, we may associate you across the different devices you use to browse our Platform. We may use information collected across these devices to personalize communications on our products and services.</p>\
				<p>To Operate, Improve and Maintain our Business, Products and Services</p>\
				<p>We use the personal data you provide to us to operate our business. For example, when you make a purchase, we use that information for accounting, audits and other internal functions. We may use personal data about how you use our products and services to enhance your user experience and to help us diagnose technical and service problems and administer our Platform.</p>\
				<p class="s-sh">To Protect Our or Others\' Rights, Property or Safety</p>\
				<p>We may also use personal data about how you use our Platform to prevent, detect or investigate fraud, abuse, illegal use, violations of our Terms of Use, and to comply with court orders, governmental requests or applicable law.</p>\
				<p class="s-sh">For General Research and Analysis Purposes</p>\
				<p>We use data about how our visitors use our Platform and services to understand customer behavior or preferences. For example, we may use information about how visitors to Nike.com search for and find products to better understand the best ways to organize and present product offerings in our storefront.</p>\
				<p class="s-sh">Use (Processing) of Workout Info</p>\
				<p>As discussed above, Nike collects data about your fitness activity or your physical characteristics, together, “Workout Info”, to provide services on our Platform. Because of the personal nature of this data, we strive to provide you with clear information about how Workout Info will be used. As this data may be considered sensitive in certain jurisdictions, we take appropriate measures in protecting and using this data and, where required by applicable law or under Nike’s internal policies, will obtain your consent for use of your Workout Info. Click here to learn more.</p>\
				<p class="s-sh">Account Linking</p>\
				<p>If you choose to link your Nike account with a membership account at a Nike Partner (“Account Linking”), Nike will obtain your consent to link and use personal data obtained from Account Linking, including your purchases and returns. We use this personal data to build the Partner Orders page shown in your Nike account and give you access to selected benefits, such as access to exclusive Nike products, rewards and experiences, when you shop with our Partners. Nike will also use the personal data to personalize your experience on the Nike Platform and, if you have given your consent, send you personalized marketing communications. Click here to learn more.</p>\
				<p class="s-sh">Other Purposes</p>\
				<p>We may also use your personal data in other ways and will provide specific notice at the time of collection and obtain your consent where necessary.</p>\
				<p class="s-sh">Legal Grounds</p>\
				<p>To process your personal data, we rely on certain legal grounds, depending on how you interact with our Platform.</p>\
				<ul>\
				<li>When you purchase Nike products from our Platform, we need your personal data to fulfill our contract with you. For example, we need your payment and contact details to deliver your order.</li>\
				<li>When you use our Apps, we rely on your consent for processing and for certain limited purposes to fulfill our contract with you (for example, for in-App purchases). </li>\
				<li>We also rely on other legal grounds, such as our legitimate interests as a business to process information about the effectiveness of our marketing campaigns, our products, services, events and other promotional initiatives; to operate, improve and maintain our business, products and services; to protect our or others\' rights, property or safety; and for general research and analysis purposes. When processing personal data for our legitimate interests, we take appropriate measures to ensure that the interests we pursue are balanced with your interests, rights and freedoms, which we are happy to explain upon request.</li>\
				<li>We also process your personal data to comply with a legal obligation, or to protect your vital interests.</li>\
				</ul>\
				<p class="s-sh">SHARING of Your Personal Data</p>\
				<p class="s-sh">Nike’s Sharing</p>\
				<p class="s-sh">Nike shares your personal data with:</p>\
				<ul>\
				<li>Nike entities for the purposes and under the conditions outlined above. </li>\
				<li>Service providers processing personal data on Nike’s behalf, for example to process credit cards and payments, shipping and deliveries, host, manage and service our data, distribute emails, research and analysis, manage brand and product promotions as well as administering certain services and features. When using service providers we enter into agreements that require them to implement appropriate technical and organizational measures to protect your personal data. </li>\
				<li>Nike’s Partners for the purpose of linking your Nike account (with your consent) and providing related services and experiences to you.</li>\
				<li>Partners who operate Nike stores to help them manage in-store activities and events. For example, Nike may share a list of attendees with the partners who organizes an event.</li>\
				<li>Other third parties to the extent necessary to: (i) comply with a government request, a court order or applicable law; (ii) prevent illegal uses of our Platform or violations of our Platform’s Terms of Use and our policies; (iii) defend ourselves against third party claims; and (iv) assist in fraud prevention or investigation (e.g., counterfeiting). </li>\
				<li>Third-party targeted advertising providers that provide personalization ad tailored advertising services to us. We use such services to match aggregated information that we hold with personal data in their database to create custom audiences and tailor advertising to your interests on the Internet, including social media, as permitted by applicable law. You may opt-out of personalized advertising and custom audiences by using the relevant settings in our Platform.</li>\
				<li>To any other third party where you have provided your consent.</li>\
				</ul>\
				<p>We may also transfer personal data we have about you in the event we sell or transfer all or a portion of our business or assets (including in the event of a reorganization, spin-off, dissolution or liquidation).</p>\
				<p class="s-sh">Your Sharing</p>\
				<p>When you use certain social features on our Platform, you can create a public profile that may include information such as your screen name, profile picture and hometown. You can also share content with your friends or the public, including information about your Nike activity. We encourage you to use the tools we provide for managing Nike’s social sharing to control what information you make available through Nike’s social features.</p>\
				<p class="s-sh">PROTECTION and MANAGEMENT of Your Personal Data</p>\
				<p class="s-sh">Encryption & Security </p>\
				<p>We use a variety of technical and organizational security measures, including encryption and authentication tools, to maintain the safety of your personal data.</p>\
				<p class="s-sh">International Transfers of your Personal Data</p>\
				<p>The personal data we collect (or process) in the context of our Platform will be stored in the USA and other countries. Some of the data recipients with whom Nike shares your personal data may be located in countries other than the country in which your personal data originally was collected. The laws in those countries may not provide the same level of data protection compared to the country in which you initially provided your data. Nevertheless, when we transfer your personal data to recipients in other countries, including the USA, we will protect that personal data as described in this privacy policy and in compliance with applicable law.</p>\
				<p>We take measures to comply with applicable legal requirements for the transfer of personal data to recipients in countries outside of the EEA, United Kingdom (UK) or Switzerland that do not provide an adequate level of data protection. We use a variety of measures to ensure that your personal data transferred to these countries receives adequate protection in accordance with data protection rules; this includes signing the EU Standard Contractual Clauses or verifying the recipient has adopted Binding Corporate Rules. Where personal data is transferred within Nike, we use an intragroup data transfer agreement.</p>\
				<p class="s-sh">Retention of your Personal Data </p>\
				<p>Your personal information will be retained for as long as is necessary to carry out the purposes set out in this privacy policy (unless a longer retention period is required by applicable law). In general, this means that we will keep your personal data for as long as you keep your Nike account. For personal data related to product purchases, we retain this longer to comply with legal obligations (such as tax and sales laws and for warranty purposes). Click here to learn more. </p>\
				<p class="s-sh">YOUR RIGHTS Relating to Your Personal Data</p>\
				<p>You have the right to request: (i) access to your personal data; (ii) an electronic copy of your personal data (portability) and to have this information transmitted to another company; (iii) correction of your personal data if it is incomplete or inaccurate; or (iv) deletion or restriction of your personal data in certain circumstances provided by applicable law. These rights are not absolute. Where we have obtained your consent for the processing of your personal data (such as Account Linking), you have the right to withdraw your consent at any time.</p>\
				<p>If you like would to request a copy of your personal data or exercise any of your other rights, please use our Nike Privacy Webform.</p>\
				<p class="s-sh">Opting Out of Direct Marketing</p>\
				<p>If you have a Nike account, you can opt-out of receiving Nike’s marketing communications by modifying your preferences in the "view or change my profile" section of our Sites. You can also opt-out by modifying your email or SMS subscriptions by clicking on the unsubscribe link or following the opt-out instructions included in the message. You can also contact us using the contact details in the “Question and Feedback” section below.</p>\
				<p class="s-sh">COOKIES and Pixel Tags</p>\
				<p>Nike collects information, which may include personal data, from your browser when you use our Platform. We use a variety of methods, such as cookies and pixel tags to collect this information, which may include your (i) IP address; (ii) unique cookie identifier, cookie information and information on whether your device has software to access certain features; (iii) unique device identifier and device type; (iv) domain, browser type and language, (v) operating system and system settings; (vi) country and time zone; (vii) previously visited websites; (viii) information about your interaction with our Platform such as click behavior, purchases and indicated preferences; and (ix) access times and referring URLs.</p>\
				<p>Third parties may also collect information via our Platform through cookies, third party plug-ins and widgets. These third parties collect data directly from your web browser and the processing of this data is subject to their own privacy policies. More information on the identity of these third parties and their privacy policies is provided here.</p>\
				<p>We use cookies and pixel tags to track our customers’ usage of the Platform and to understand our customers’ preferences (such as country and language choices). This enables us to provide services to our customers and improve their online experience. We also use cookies and pixel tags to obtain aggregate data about Platform traffic and interaction, to identify trends and obtain statistics so that we can improve our Platform. There are generally four categories of cookies used on our Platform:</p>\
				<ul>\
				<li>Strictly Necessary (Always on): Enables core functionality to power your language, location and shopping bag. Also supports security, network management and accessibility.</li>\
				<li>Personalised Experiences: Allows use of behavioral data, using cookies and other technologies, to improve your experience and provide relevant content on Nike platforms and in communications.</li>\
				<li>Performance & Analytics: Allows use of behavioural data to optimise performance, review how you interact with our sites and apps, and improve Nike experiences.</li>\
				<li>Personalised Advertising: Allows sharing of behavioural data with advertising partners. This data is used to enhance and report on the personalised advertising experience on partner sites.</li>\
				</ul>\
				<p>We interact with third-party analytics services on our Platform. These third parties share reports with us about the use of our Platform, including to help us better understand our Platform users’ interests and demographics. These reports do not contain information that directly identifies you. However, they can be used by these third parties for our remarketing campaigns to you if you have turned on certain ads personalization services. Where required by applicable law, we will obtain your consent to conduct this activity.</p>\
				<p>You can always change your preference by visiting the "Cookie Settings" at the bottom of each page of our websites.</p>\
				<p>You may also see our ads on other websites, such as our partner’s websites, because we use third-party ad services. Through these ad services, we can show you ads that may be tailored to your individual interests. These ad services may also track your online activities over time and across multiple websites and apps by collecting information through automated means. This data collection takes place both on our Platform and on third-party websites and apps that participate in these ad services.</p>\
				<p>For a comprehensive and up-to-date summary of every third-party accessing your web browser (through Nike Platform or otherwise), we recommend installing a web browser plugin built for this purpose. You can also choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings on each browser and device that you use. Each browser is a little different, so look at your browser Help menu to learn the correct way to modify your cookies. If you turn cookies off, you may not have access to many features that make our Platform more efficient and some of our services will not function properly.</p>\
				<p>There are also general resources for opting out of interest-based advertising available on the website of the Digital Advertising Alliance.</p>\
				<p>Similarly, you can adjust your advertising preferences on your mobile device at the device level. For example, to adjust your advertising preferences in iOS, visit Settings > Privacy > Advertising > Limit Ad Tracking. To adjust your advertising preferences in Android, visit Settings > Google > Ads > Opt out of interest-based ads.</p>\
				<p class="s-sh">USING Nike Platform with Third-Party Products and Services</p>\
				<p>Our Platform allows you to interact with a wide variety of other digital products and services. For example, our Platform can integrate with third-party devices for activity tracking, social networks, music streaming services and other digital services.</p>\
				<p>If you choose to connect your Nike account with a third-party device or account, your privacy rights on third-party platforms will be governed by their respective policies. For example, if you choose to share your Nike activity on third-party social media platforms, if you browse our website while being authenticated on third-party platforms and you turned on certain ads personalization services, or if you ask us to link your Nike account with your membership accounts with Nike’s Partners, the policies of those third-party platforms and Partners govern the data that resides there. </p>\
				<p>Our Platform may provide links to other (third-party) websites and apps for your convenience or information. Linked sites and apps have their own privacy notices or policies, which we strongly encourage you to review. To the extent any linked websites or apps are not owned or controlled by us, we are not responsible for their content, any use of the websites or apps, or the privacy practices of the websites or apps.</p>\
				<p class="s-sh">CHANGES to Our Privacy Policy</p>\
				<p>Applicable law and our practices change over time. If we decide to update our privacy policy, we will post the changes on our Platform. If we materially change the way in which we process your personal data, we will provide you with prior notice, or where legally required, request your consent prior to implementing such changes. We strongly encourage you to read our privacy policy and keep yourself informed of our practices. This privacy policy was last modified in June 2023.</p>\
				<p class="s-sh">QUESTIONS and Feedback</p>\
				<p>We welcome questions, comments, and concerns about our privacy policy and privacy practices.</p>\
				<p>If you wish to provide feedback or if you have questions or concerns or wish to exercise your rights related to your personal data, please use our Nike Privacy Webform. </p>\
				 <p>Our Data Protection Officer\'s contact details are: Nike Privacy Office, Nike Retail B.V., Colosseum 1, 1213NL Hilversum, The Netherlands or privacy@nike.com.</p>\
				<p>If you contact us with a privacy complaint it will be assessed with the aim of resolving the issue in a timely and effective manner. You also have the right to lodge a complaint with the relevant supervisory authority in the country in which you reside.</p>';
		    break;
		case 'use':
			upper='Terms of Use';
			text='<p>Date of last revision: June 2022</p>\
<p class="s-sh">PLEASE READ THESE TERMS OF USE (“TERMS”) CAREFULLY BEFORE USING ANY NIKE PLATFORM.</p>\
<p>If you live in any of the following countries or regions, additional terms may apply to you and are viewable at the bottom of these Terms. We display the country/region within the Terms when applicable. These additional terms override the Terms below to the extent of any inconsistency.</p>\
<p>Argentina, Australia, Brazil, Canada, Colombia, Hong Kong, Japan, Korea, Philippines, all European countries (including specific terms for Austria, Belgium, France, Germany, Hungary, Italy, Poland and Switzerland.</p>\
<p>Welcome to the NIKE community! You are reading these Terms because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”). You may access the Platform through a computer, mobile phone, tablet, console or other technology, which we refer to here as a “Device”. Your service provider’s normal rates and fees apply to your Device.</p>\
<p>These Terms create a legally binding agreement between you and NIKE and its affiliates (which we may refer to as “NIKE”, “we”, “us” or “our”) regarding your use of the Platform. Please review our List of Local Entities for the name of the NIKE entity responsible for providing the Platform to you and the appropriate contact information. A few important points:</p>\
<ul>\
<li>Our Terms May Change. Some jurisdictions do not permit unilateral updates or changes to consumer terms, so this paragraph may not apply to you. [See Canada terms.] We may update these Terms from time to time. If a material change is made, we will post a notice on the Platform or send you a notification. Read through any changes, and if you don’t agree to them, please stop using the Platform. If you continue to use our Platform after we notify you of changes, you will be deemed to have accepted the updated Terms, except to the extent prohibited by applicable law.</li>\
<li>Terms of Sale. By making any purchase with us, you also agree to the Terms of Sale that apply in your country or region. [See Hungarian terms.]</li>\
<li>Privacy Policy. Our Privacy Policy describes the collection and use of personal information on the Platform and applies to your use of the Platform.</li>\
<li>Important Notice for Amateur Athletes. You are responsible for ensuring that your participation on the Platform does not affect your eligibility as an amateur athlete. Please check with your amateur athletic association for the rules that apply to you. NIKE is not responsible or liable for your use of the Platform resulting in your ineligibility as an amateur athlete.</li>\
</ul>\
<p class="s-sh">1. GROUND RULES</p>\
<p>Eligibility. You are only eligible to use the Platform if you are of legal age in your country or if you have consent from your parent or guardian. There may be certain age restrictions for specific Platform services in various countries.</p>\
<p>Rules for Registration. When you register for an account with us, the following rules apply:</p>\
<ul>\
<li>Be True: Provide accurate and current registration information.</li>\
<li>Be You: Keep your registration personal. Do not register for more than one NIKE account, register a NIKE account on behalf of someone else, or transfer your account.</li>\
<li>Be Secure: Keep your username, password and other login credentials secure and do not allow anyone else to use your account.</li>\
<li>Be Responsible: Inform NIKE immediately of any unauthorised use of your NIKE account. You are responsible for anything that happens through your NIKE account – with or without your permission. TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, NIKE IS NOT RESPONSIBLE FOR ANY LOSS OR ACTIVITY THAT RESULTS FROM THE UNAUTHORISED USE OF YOUR ACCOUNT.</li>\
</ul>\
<p class="s-sh">2. OWNERSHIP OF CONTENT</p>\
<p>Except for User Content (defined below), all of the content on our Platform – including text, software, scripts, code, designs, graphics, photos, sounds, music, videos, applications, interactive features, articles, news stories, sketches, animations, stickers, general artwork and other content ("Content") – is owned by NIKE or others we license Content from, and is protected by copyright, trademark, patent and other laws. NIKE reserves all rights not expressly described in these Terms.</p>\
<ul>\
<li>All trademarks, service marks and trade names (e.g. the NIKE name and the Swoosh design) are owned, registered and/or licensed by NIKE. You do not acquire a licence or any ownership rights to any trademarks, service marks, or trade names through your access or use of the Platform or Content.</li>\
<li>You agree not to change or delete any ownership notices from materials downloaded or printed from the Platform.</li>\
<li>To the extent NIKE approves the download or use of Content comprised of copyrights or copyrightable works, NIKE grants you a limited, personal, non-transferable, non-sublicensable, and revocable licence to access and use such copyrights or copyrightable works solely for their intended purpose and solely for as long as NIKE makes such Content generally available to the public. You do not acquire any ownership rights in the Content (including any trademarks or other intellectual property included in the Content), and all such Content is intended for personal, non-commercial use. NIKE reserves the right to monitor your use and to alter or revoke this licence or your access to the Content at any time and for any reason. NIKE reserves the right to take down any Content in violation of these terms or NIKE’s intellectual property rights. NIKE allowing you this limited use does not constitute a waiver of any of Nike’s rights to the Content.</li>\
<li>Outside of the specific usage rights granted to you by NIKE in connection with the Platform, you agree not to use, copy, edit, translate, display, distribute, download, transmit, sell, create derivative works of, or in any way exploit any Content, including User Content (unless it is your own User Content that you legally post on the Platform), without NIKE’s prior written consent. Unauthorised use of the Content may constitute a breach of copyright, trademark or other intellectual property laws and may subject you to criminal or civil charges and penalties.</li>\
</ul>\
<p class="s-sh">3. POSTING CONTENT ON THE PLATFORM</p>\
<p>User Content Licence. Some parts of the Platform allow you to post photos, videos, comments, and other content, which we refer to as “User Content”. Nike is not responsible for User Content others post to the Platform. User Content is owned by you or whoever created it, but when you post User Content you license it to NIKE as described below:</p>\
<ul>\
<li>You represent that you have the right to post your User Content, and you grant NIKE a non-exclusive, perpetual, transferable, sub-licensable, royalty-free, worldwide licence to use any of the User Content that you post on or in connection with the Platform, including the likeness of any person that appears in the User Content, or any of the concepts or ideas contained in the User Content, for any purpose, including commercial use, which includes the right to translate, display, reproduce, modify, create derivative works, sublicense, distribute and assign these rights. NIKE may, in its sole discretion, remove any User Content at any time. [See Argentina, Colombia, Belgium, and Philippines terms.]</li>\
<li>You understand that deleted User Content may persist in NIKE’s systems and on the Platform to the extent your User Content has been publicly posted or shared with others who have not deleted it, unless you or the relevant individual request deletion or blocking of personal data in accordance with applicable law.</li>\
</ul>\
<p>LICENCE TO USE COMMENTS, FEEDBACK AND IDEAS. You understand that any comments, feedback or ideas you send us are provided on a non-confidential basis and you grant to NIKE a perpetual, worldwide licence to use all comments, feedback and ideas you may share with us, without notice, compensation or acknowledgement to you, for any purposes whatsoever, including, but not limited to, developing, manufacturing and marketing products and services and creating, modifying or improving products and services. [See Colombia and Belgium terms.]\
</p>\
<p class="s-sh">4. USER CODE OF CONDUCT</p>\
<p>We’re excited to have you contribute to the NIKE community. Here are a few basic rules:</p>\
<ul>\
<li>Be Original. Only post User Content to the Platform if you have all permissions and rights needed to make that User Content available, including from any individuals who appear or are mentioned in your User Content.</li>\
<li>Be Safe.</li>\
<li>Do not do anything that may expose NIKE or its users to any type of harm, including anything that may disrupt, damage, disable, tamper with, overburden or limit the functionality of the Platform.</li>\
<li>Do not post User Content that contains software viruses, programmes or other computer code, and do not circumvent or modify any Platform software or security technology.</li>\
<li>Do not use any data mining, robots, scraping or similar data gathering methods.</li>\
<li>Unless we indicate otherwise, our Platform is a public place. Do not post personal information to the Platform – yours or anybody else’s.</li>\
<li>Be Personal.</li>\
<li>Do not post any advertising, solicitation or commercial content on the Platform or accept payment from a third party in exchange for performing commercial activity on the Platform.</li>\
<li>Do not collect or solicit personal information from other Platform users or send unsolicited messages.</li>\
<li>Do not use automated technology to interact with the Platform.</li>\
<li>Be Appropriate. Respect the community and do not post User Content, link to a website, or do anything that is illegal, misleading, malicious, harassing, inaccurate, discriminatory or otherwise objectionable or inappropriate or which violates any applicable laws. NIKE has the right to prescreen, monitor or remove User Content – but we have no obligation to do so.</li>\
<li>Be Yourself. Do not impersonate any person or organisation, including athletes or NIKE employees.</li>\
<li>HAVE FUN!</li>\
</ul>\
<p class="s-sh">5. COPYRIGHT INFRINGEMENT</p>\
<p>Please consult your legal adviser before filing a notice with us because there may be penalties for false claims. NIKE may terminate the accounts of Platform users found to infringe third party copyrights.</p>\
<p>If you believe that your work has been improperly copied to the Platform, such that it constitutes infringement, please provide us with the following information [See France terms.]:</p>\
<p>(1) name, address, telephone number, email address and an electronic or physical signature of the copyright owner or of the person authorised to act on his/her behalf;</p>\
<p>(2) a description of the copyrighted work that you claim has been infringed;</p>\
<p>(3) a description of where on the Platform the content that you claim is infringing is located;</p>\
<p>(4) a written statement that you have a good faith belief that the disputed use is not authorised by the copyright owner, its agent, or the law; and</p>\
<p>(5) a statement by you, made under penalty of perjury (depending on applicable law), that the above information in your notice is accurate and that you are the copyright owner or authorised to act on the copyright owner\'s behalf.</p>\
<p>Send copyright infringement complaints to:</p>\
<p>Legal Department (Copyright)</p>\
<p>One Bowerman Dr., Beaverton, OR 97005</p>\
<p>Telephone: 503-671-6453</p>\
<p>Fax: 503-646-6926</p>\
<p>Copyright.legal@nike.com</p>\
<p class="s-sh">6. PARTNERS ON THE PLATFORM</p>\
<p>From time to time, NIKE may link to or partner with third-party websites, social media platforms, mobile apps, and other products and services (“Third Parties”). You may be able to connect with these Third Parties through the Platform, but this does not mean NIKE endorses, monitors or has any control over these Third Parties or their activities, which are subject to separate terms of use and privacy policies. You should carefully review any Third Party’s sites and terms of use and privacy policy. NIKE is not responsible for the content, policies or activities of Third Parties and you interact with Third Parties at your own risk.</p>\
<p class="s-sh">7. IMPORTANT DISCLAIMERS</p>\
<p>PHYSICAL ACTIVITY. [See Canada, Germany and Italy terms, because the following exclusions and limitations may not apply to you.] The Platform may include features that promote physical activity, nutrition or general wellness. They are for your informational purposes only and are not intended as medical advice or services, or for diagnostic or treatment purposes.</p>\
<ul>\
<li>Consider the risks involved and consult with your medical professional before engaging in any physical activity.</li>\
<li>Never disregard professional medical advice or delay in seeking it because of something you have viewed on the Platform.</li>\
<li>TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, NIKE IS NOT RESPONSIBLE OR LIABLE FOR ANY INJURIES OR DAMAGES YOU MAY SUSTAIN THAT RESULT FROM YOUR USE OF, OR INABILITY TO USE, THE FEATURES ON THE PLATFORM.</li>\
</ul>\
<p>USER INTERACTIONS. To the extent allowed by applicable law, we are not responsible for your interactions with other users of the Platform or any damage or harm you may experience because of these interactions. [See Italy terms.]</p>\
<p>Be responsible and take precautions when interacting with other users (including users you do not know) on the Platform. Before you meet another person face-to-face, consider investigating, bringing a friend, choosing public locations and letting someone know where you will be. NIKE is under no obligation to become involved with any user dispute but may do so at its own discretion.</p>\
<p>WARRANTY DISCLAIMER. Some jurisdictions do not permit certain limitations or exclusions on liabilities, legal warranties and remedies, so these exclusions and limitations may not apply to you. [See Australia, Canada and Germany terms.]</p>\
<ul>\
<li>The Platform, Content, and the materials and products on this Platform are provided "AS IS”. We aren’t making any promises of any kind, including about the Platform’s accuracy, adequacy, usefulness, reliability or otherwise. TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, NIKE IS NOT RESPONSIBLE OR LIABLE FOR ANY USER CONTENT POSTED ON THE PLATFORM. </li>\
<li>NIKE does not guarantee that the Platform will be uninterrupted or error-free, that any defects will be corrected, or that the Platform is free of viruses or anything else harmful.</li>\
<li>To the fullest extent permitted by law, NIKE disclaims all warranties, express or implied, regarding the Platform, Content, User Content and any products or services you may obtain or access through the Platform, including, but not limited to, implied warranties of title, merchantability, fitness for a particular purpose and non-infringement.</li>\
<li>You are solely responsible for any damage to your Device resulting from accessing the Platform, to the extent applicable law does not provide otherwise.</li>\
<li>We hope you enjoy and get the full benefit of the Platform; however, we do not guarantee any results.</li>\
</ul>\
<p class="s-sh">8. TERMINATION</p>\
<p>NIKE may terminate or modify any Nike Platform, member programme, product or service at any time without notice.</p>\
<p>NIKE may terminate or suspend your account, delete your profile or any of your User Content, and restrict your use of all or any part of the Platform at any time and for any reason, without any liability to Nike, subject to applicable law. </p>\
<ul>\
<li>You understand and agree that some of your User Content, particularly that which is displayed in an activity feed or in other public places on the Platform, may continue to appear publicly even after your account is terminated, subject to your right to have your User Content removed upon request in accordance with applicable law.</li>\
<li>These Terms remain in effect even after your account is terminated or you have stopped using the Platform.</li>\
</ul>\
<p class="s-sh">9. INDEMNIFICATION/LIMITATION OF LIABILITY</p>\
<p>We want you to enjoy our Platform, but NIKE must also protect itself from any damages you may cause.</p>\
<p>Indemnification and RELEASE. Some jurisdictions do not permit certain limitations or exclusions on liabilities, legal warranties and remedies, so these exclusions limitations may not apply to you. [See Canada, France, Germany and Hong Kong terms.] You agree to indemnify, defend, and hold harmless NIKE Inc., its affiliates, officers, directors, employees, agents, licensors and suppliers (the “NIKE Parties”) from and against all claims, losses, liabilities, expenses, damages and costs, including, without limitation, legal fees, arising from or relating in any way to your User Content, your use of Content, your use of the Platform, your conduct in connection with the Platform or with other Platform users, or any violation of these Terms of Use, any law or the rights of any third party. You, for yourself and on behalf of your heirs, estate, insurers, successors and assigns, hereby fully and forever release and discharge the NIKE Parties from any and all claims or causes of action you may have for damages relating in any way to your use of the Platform.</p>\
<p>LIMITATION OF LIABILITY. Some jurisdictions do not permit certain limitations or exclusions on liabilities, legal warranties and remedies, so these exclusions/limitations may not apply to you. [See Canada, France, Germany, Hong Kong and Philippines terms.] NONE OF THE NIKE PARTIES WILL BE LIABLE FOR ANY DIRECT, SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES, INCLUDING WITHOUT LIMITATION FOR ANY LOST PROFITS OR LOST DATA, THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE PLATFORM OR THE PERFORMANCE OF THE PRODUCTS PURCHASED THROUGH THE PLATFORM OR THE CONDUCT OF OTHER PLATFORM USERS (WHETHER ONLINE OR OFFLINE), OR ATTENDANCE AT A NIKE EVENT OR NIKE PARTNER EVENTS, OR ANY USER CONTENT OR ANY OTHER ACTIVITY IN CONNECTION WITH THE USE OF THE PLATFORM, EVEN IF NIKE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE PLATFORM. YOUR ONLY REMEDY AGAINST NIKE IN CONNECTION WITH ANY DAMAGES ARISING FROM YOUR USE OF THE PLATFORM OR ANY CONTENT IS TO STOP USING THE PLATFORM. IF NIKE IS FOUND TO BE LIABLE TO YOU FOR ANY DAMAGE OR LOSS WHICH IS IN ANY WAY CONNECTED WITH YOUR USE OF THE PLATFORM OR ANY CONTENT, NIKE\'S LIABILITY SHALL NOT EXCEED US$100.00 OR EURO 100.00 IF YOU LIVE IN EUROPE.</p>\
<p class="s-sh">10. DISPUTES/ADDITIONAL TERMS</p>\
<p class="s-sh">Choice of Law/Jurisdiction</p>\
<p>If you live in any of the following countries, different “Choice of Law/Jurisdiction” terms may apply to you: Argentina, Austria, Brazil, Canada, France, Germany, Hong Kong, Italy, Philippines, Poland, Switzerland and all other European countries.</p>\
<ul>\
<li>You agree that this Platform is a passive platform solely based in Oregon, USA, which does not give rise to personal jurisdiction over NIKE in jurisdictions other than Oregon.</li>\
<li>You agree that the Platform, Terms, Privacy Policy and any dispute between you and NIKE shall be governed in all respects by Oregon law, without regard to choice of law provisions, and not by the 1980 UN Convention on Contracts for the International Sale of Goods.</li>\
<li>Except where prohibited by applicable law, and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved individually, without resort to any form of class action, and exclusively in the state or federal courts located in Multnomah County, Oregon, USA.</li>\
<li>You consent to waive all defences of “lack of personal jurisdiction” and “inconvenient forum” with respect to venue and jurisdiction in the state and federal courts of Multnomah County, Oregon.</li>\
<li>All claims shall be brought within one (1) year after the claim arises, except to the extent a longer period is required by applicable law.</li>\
</ul>\
<p class="s-sh">Electronic Communications</p>\
<ul>\
<li>By using the Platform, you agree to receive certain electronic communications from NIKE, subject to applicable law.</li>\
<li>You agree that any notice, agreement, disclosure or other communication that NIKE sends you electronically will satisfy any legal communication requirements, including that such communications be in writing.</li>\
</ul>\
<p class="s-sh">Right to Assign, No Waivers, Severability</p>\
<ul>\
<li>NIKE may assign its rights and duties under these Terms to any party at any time without notice to you, unless notice to you is required by applicable law, but this will not affect your rights or our obligations under these Terms.</li>\
<li>NIKE’s failure to insist upon or enforce strict performance of these Terms is not a waiver of any of these Terms or NIKE’s rights. Users should always assume these Terms apply.</li>\
<li>If any provision in these Terms is held invalid or unenforceable, the remainder of these Terms shall continue to be enforceable.</li>\
</ul>\
<p>Thanks for reading. Please enjoy our community!</p>\
<p>COUNTRY/REGION SPECIFIC TERMS</p>\
<p>If you live in one of the following countries these additional terms apply and override any inconsistent terms in the Terms of Use.</p>\
<p class="s-sh">ARGENTINA</p>\
<p>Section 3 (POSTING CONTENT ON THE PLATFORM): the first bullet point paragraph under sub-section “USER CONTENT LICENCE” is deleted and replaced with the following:</p>\
<p>“You grant NIKE a non-exclusive, transferable, royalty-free, worldwide licence to display the User Content that you post on or in connection with the Platform and to share it with other Users, including the right to translate, display, reproduce, modify, create derivative works of, sublicense and distribute the User Content.</p>\
<p>For example, we need these rights so we can copy your User Content into our databases, display it in the correct format across our mobile applications, and send your User Content to vendors who perform services on Nike’s behalf”.</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): this section is modified as follows:</p>\
<p>The sub-section titled “CHOICE OF LAW/JURISDICTION” is hereby deleted and replaced with the following (except the last bullet point regarding bringing claims, which remains unchanged):</p>\
<p>“Choice of Law/Jurisdiction</p>\
<ul>\
<li>You agree that the Platform, Terms, Privacy Policy and any dispute between you and NIKE shall be governed in all respects by Argentine law.”</li>\
</ul>\
<p class="s-sh">AUSTRALIA</p>\
<p>Section 7 (IMPORTANT DISCLAIMERS): this section is modified as follows:</p>\
<p>The sub-section titled “WARRANTY DISCLAIMER” is modified by adding the following:</p>\
<p>“However, the Platform, Content, and the materials and products on this Platform, come with certain guarantees that cannot be excluded for the benefit of Australian customers under Australian consumer law (“ACL”), including guarantees as to the acceptable quality and fitness of purpose of products. Nothing in these Terms will be read or applied so as to exclude, restrict or modify or have the effect of excluding, restricting or modifying any condition, warranty, guarantee, right or remedy implied by the ACL and which by law cannot be excluded, restricted or modified, even if any other term of these Terms would otherwise suggest that this might be the case.”</p>\
<p class="s-sh">BRAZIL</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): this section is modified as follows:</p>\
<p>The sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted and replaced with the following:</p>\
<p class="s-sh">“Choice of Law/Jurisdiction</p>\
<ul>\
<li>You agree that the Platform, Terms, Privacy Policy and any dispute between you and NIKE shall be governed in all respects by Brazilian law, without regard to choice of law provisions, and not by the 1980 UN Convention on Contracts for the International Sale of Goods.</li>\
<li>Except where prohibited, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved individually, without resort to any form of class action, and exclusively in Brazil.”</li>\
</ul>\
<p class="s-sh">CANADA</p>\
<p>Introductory Paragraph:</p>\
<p>The section titled “Our Terms May Change” is qualified by the following:</p>\
<p>“(a) Nike must send to you, at least 30 days before the amendment comes into force, a written notice drawn up clearly and legibly, setting out the new clause and the date of the coming into force of the amendment; and</p>\
<p>(b) you may refuse the amendment and rescind or, in the case of a contract involving sequential performance, cancel the contract without cost, penalty or cancellation indemnity by sending Nike a notice to that effect no later than 30 days after the amendment comes into force, if the amendment entails an increase in your obligations or a reduction in Nike’s obligations.”</p>\
<p>MULTIPLE SECTIONS: The terms set forth in the sections titled “Physical Activity”, “Warranty Disclaimer”, “Indemnification/Limitation of Liability” and “Limitation of Liability” are qualified by the following:</p>\
<p>“Consumer protection laws in some jurisdictions, including Quebec, do not allow for the limitations and exclusions of warranties on purchased products. If these laws apply to you, the exclusions or limitations in the following sections may not apply: Physical Activity, Warranty Disclaimer, Indemnification/Limitation of Liability and Limitation of Liability.”</p>\
<p>SECTION 10 (DISPUTES/ADDITIONAL TERMS): this section is modified as follows:</p>\
<p>The sub-section titled “CHOICE OF LAW/JURISDICTION” is modified by adding the following at the beginning of the section:</p>\
<p>“Consumer protection laws in some jurisdictions, such as Quebec, might require that your agreement be governed by the laws of your jurisdiction and heard by competent courts in your jurisdiction. In addition, such laws may not allow you to waive your right to be part of a class action or to limit your time limitation to commence legal proceedings. If these laws apply to you, the following limitations may not be applicable."</p>\
<p class="s-sh">COLOMBIA</p>\
<p>Section 3 (POSTING CONTENT ON THE PLATFORM): the sub-section titled “USER CONTENT LICENCE” is modified as follows:</p>\
<p>The first bullet point paragraph under USER CONTENT LICENCE is deleted and replaced with the following:</p>\
<p>“You grant NIKE a non-exclusive, indefinite, transferable, sub-licensable, royalty-free, worldwide licence to use any of the User Content that you post on or in connection with the Platform, including the likeness of any person that appears in the User Content, or any of the concepts or ideas contained in the User Content, for any purpose, including commercial use, which includes the right to translate, display, reproduce, modify, create derivative works, sublicense, distribute and assign these rights.”</p>\
<p>Section 3 (POSTING CONTENT ON THE PLATFORM): the sub-section titled “LICENCE TO USE COMMENTS, FEEDBACK AND IDEAS” is deleted in its entirety and replaced with the following:</p>\
<p>“AUTHORISATION TO USE COMMENTS, FEEDBACK AND IDEAS. You grant to NIKE an indefinite, worldwide authorisation to use all comments, feedback and ideas you may share with us, without notice, compensation or acknowledgement to you, for any purposes whatsoever, including, but not limited to, developing, manufacturing and marketing products and services and creating, modifying or improving products and services.”</p>\
<p class="s-sh">HONG KONG</p>\
<p>Nike, Inc., an entity registered in the State of Oregon, USA and with its address at One Bowerman Drive, Beaverton, OR 97005, USA) is: (1) the operator and manager of the NRC and NTC Apps, and (2) our contracting entity for these Terms with you.</p>\
<p>Section 9 (INDEMNIFICATION / LIMITATION OF LIABILITY): This section is deleted and replaced with the following:</p>\
<p>"Indemnification and release.  You agree to indemnify, defend, and hold harmless NIKE Inc., its affiliates, officers, directors, employees, agents, licensors and suppliers (the “NIKE Parties”) from and against all claims, losses, liabilities, expenses, damages and costs (including attorneys\' fees), arising from or relating in any way to your User Content, your use of Content, your use of the Platform, your conduct in connection with the Platform or with other Platform users, or any violation of these Terms, any law or the rights of any third party. </p>\
<p>Limitation of liability. Except to the extent permitted by applicable laws, you agree:</p>\
<ul>\
<li>that none of the NIKE Parties will be liable for any special, incidental or consequential damages (including any lost profits or lost data) that result from the use of, or the inability to use, the Platform or the performance of the products purchased through the Platform or the conduct of other Platform Users (whether online or offline), or attendance at a NIKE event or NIKE partner events, or any User Content or any other activity in connection with the use of the Platform, even if NIKE has been advised of the possibility of such damages;</li>\
<li>you assume total responsibility for your use of the Platform; and</li>\
<li>if NIKE is found to be liable to you for any damage or loss which is in any way connected with your use of the Platform or any Content, NIKE\'s liability shall not exceed the greater of: (1) the amount you have paid to us under these Terms for your use of the Platform or any Content, or (2) US$100.00.”</li>\
</ul>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): The first bullet point under the sub-section titled "CHOICE OF LAW/JURISDICTION" is deleted in its entirety.</p>\
<p>JAPAN</p>\
<p>Section 9 (INDEMNIFICATION/LIMITATION OF LIABILITY): this section is modified as follows:</p>\
<p>The sub-section titled “LIMITATION OF LIABILITY” is deleted in its entirety and replaced with the following:</p>\
<p>LIMITATION OF LIABILITY. NONE OF THE NIKE PARTIES WILL BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES, INCLUDING WITHOUT LIMITATION FOR ANY LOST PROFITS OR LOST DATA, THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, THE PLATFORM OR THE PERFORMANCE OF THE PRODUCTS PURCHASED THROUGH THE PLATFORM OR THE CONDUCT OF OTHER PLATFORM USERS (WHETHER ONLINE OR OFFLINE), OR ATTENDANCE AT A NIKE EVENT OR NIKE PARTNER EVENTS, OR ANY USER CONTENT OR ANY OTHER ACTIVITY IN CONNECTION WITH THE USE OF THE PLATFORM, EVEN IF NIKE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE PLATFORM. YOUR ONLY REMEDY AGAINST NIKE IN CONNECTION WITH ANY DAMAGES ARISING FROM YOUR USE OF THE PLATFORM OR ANY CONTENT IS TO STOP USING THE PLATFORM. IF NIKE IS FOUND TO BE LIABLE TO YOU FOR ANY DAMAGE OR LOSS WHICH IS IN ANY WAY CONNECTED WITH YOUR USE OF THE PLATFORM OR ANY CONTENT, NIKE\'S LIABILITY SHALL NOT EXCEED US$100.00 OR EURO 100.00 IF YOU LIVE IN EUROPE.</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): this section is modified as follows:</p>\
<p>The sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following:</p>\
<p class="s-sh">“Choice of Law/Jurisdiction</p>\
<ul>\
<li>You agree that the Platform, Terms, Privacy Policy and any dispute between you and NIKE shall be governed in all respects by Japanese law, without regard to choice of law provisions, and not by the 1980 UN Convention on Contracts for the International Sale of Goods.</li>\
<li>Except where prohibited by applicable law, and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved individually, without resort to any form of class action, and exclusively in the courts located in Tokyo, Japan.</li>\
<li>All claims shall be brought within one (1) year after the claim arises, except to the extent a longer period is required by applicable law.</li>\
</ul>\
<p class="s-sh">KOREA</p>\
<p>The following location-based service provider terms apply to your use of and access to the Nike Running Club app and the Nike Training Club app: location-based service provider terms. In the event of any conflict between the location-based service provider terms and these Terms, these Terms shall govern.</p>\
<p class="s-sh">PHILIPPINES</p>\
<p>Section 2 (OWNERSHIP OF CONTENT): The third bullet point of this Section is revised as follows:</p>\
<p>To the extent NIKE approves the download or use of Content comprised of copyrights or copyrightable works, NIKE grants you a limited, personal, non-transferable, and non-assignable right to access and use such copyrights or copyrightable works solely for their intended purpose and solely for as long as NIKE makes such Content generally available to the public. You do not acquire any ownership rights or any form of licence in the Content (including any trademarks or other intellectual property included in the Content), and all such Content is intended for personal, non-commercial use. NIKE reserves the right to monitor your use and to alter or revoke the same or your access to the Content at any time and for any reason. NIKE reserves the right to take down any Content in violation of these terms or NIKE’s intellectual property rights. NIKE allowing you this limited use does not constitute a waiver of any of Nike’s rights to the Content.</p>\
<p>Section 3 (POSTING CONTENT OF THE PLATFORM): This section is revised as follows:</p>\
<p>User Content Licence. Some parts of the Platform allow you to post photos, videos, comments, and other content, which we refer to as “User Content”. Nike is not responsible for User Content others post to the Platform. User Content is owned by you or whoever created it, but when you post User Content you agree as follows:</p>\
<ul>\
<li>You represent that you have the right to post your User Content, and you agree to execute all relevant documents to grant NIKE a non-exclusive, perpetual, transferable, sub-licensable, royalty-free, worldwide licence to use any of the User Content that you post on or in connection with the Platform, including the likeness of any person that appears in the User Content, or any of the concepts or ideas contained in the User Content, for any purpose, including commercial use, which includes the right to translate, display, reproduce, modify, create derivative works, sublicense, distribute and assign these rights. NIKE may, in its sole discretion, remove any User Content at any time.</li>\
<li>You understand that deleted User Content may persist in NIKE’s systems and on the Platform to the extent your User Content has been publicly posted or shared with others who have not deleted it, unless you or the relevant individual request deletion or blocking of personal data in accordance with applicable law.</li>\
</ul>\
<p>Section 9 (INDEMNIFICATION/LIMITATION OF LIABILITY): The sub-section titled \"LIMITATION OF LIABILITY\" is deleted and replaced with the following:</p>\
<p>\"To the extent allowed under applicable law, none of the NIKE parties will be liable for any special, incidental or consequential damages, including without limitation for any lost profits or lost data, that result from the use of, or the inability to use, the Platform or the performance of the products purchased through the Platform or the conduct of other Platform Users (whether online or offline), or attendance at a NIKE event or NIKE partner events, or any User Content or any other activity in connection with the use of the Platform, even if NIKE has been advised of the possibility of such damages. If NIKE is found to be liable to you for any damage or loss which is in any way connected with your use of the Platform or any Content, NIKE\'s liability shall not exceed US$100.00 or Euro 100.00 if you live in Europe, without prejudice to any applicable law."</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): The first bullet point under the sub-section titled "CHOICE OF LAW/JURISDICTION" is deleted in its entirety.</p>\
<p class="s-sh">EUROPEAN COUNTRIES</p>\
<p>The following revisions apply to all European countries, except Austria, France, Germany, Italy, Poland and Switzerland, which have other specific revisions to these terms applicable to European Countries.</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): this section is modified as follows:</p>\
<p>The sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following (except the last bullet point regarding bringing claims, which remains unchanged):</p>\
<p class="s-sh">“Choice of Law/Jurisdiction</p>\
<ul>\
<li>You agree that the Platform, Terms, and any dispute between you and NIKE shall be governed in all respects by Dutch law, without regard to choice of law provisions, and not by the 1980 UN Convention on Contracts for the International Sale of Goods.</li>\
<li>Except where prohibited and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved and exclusively in the competent courts of Amsterdam, the Netherlands.”</li>\
</ul>\
<p class="s-sh">AUSTRIA</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): this section is replaced with the version for European Countries below, except the following is added at the end:</p>\
<p>“All claims shall be brought within three (3) years after the claim arises.”</p>\
<p class="s-sh">BELGIUM</p>\
<p>Section 3 (POSTING CONTENT ON THE PLATFORM): this section is modified as follows:</p>\
<p>The first bullet point paragraph under the sub-section titled “USER CONTENT LICENCE” is deleted in its entirety and replaced with the following:</p>\
<p>“You grant NIKE a non-exclusive, perpetual (or at least for the duration of the legal protection of the intellectual property rights/image rights which may lie in the User Content), transferable, sub-licensable, royalty-free, worldwide licence to use any of the User Content that you post on or in connection with the Platform, including the likeness of any person that appears in the User Content, or any of the concepts or ideas contained in the User Content, for any purpose, including commercial, promotional and operational use, which includes the right to translate, display, reproduce, modify, create derivative works, sublicense, distribute and assign these rights.”</p>\
<p>The sub-section titled “LICENCE TO USE COMMENTS, FEEDBACK AND IDEAS” is deleted in its entirety and replaced with the following:</p>\
<p>“LICENCE TO USE COMMENTS, FEEDBACK AND IDEAS. You grant to NIKE a perpetual (or at least for the duration of the legal protection of the intellectual property rights/image rights which may lie in the comments, feedback and ideas), worldwide licence to use all comments, feedback and ideas you may share with us, without notice, compensation or acknowledgement to you, for any purposes whatsoever, including, but not limited to, developing, manufacturing and marketing products and services and creating, modifying or improving products and services.”</p>\
<p class="s-sh">FRANCE</p>\
<p>Section 5 (COPYRIGHT INFRINGEMENT): the second paragraph in this section is deleted in its entirety and replaced with the following:</p>\
<p>“If you believe that your work has been improperly copied to the Platform, such that it constitutes infringement, please provide us with the following information:</p>\
<p>(1) date of the notification;</p>\
<p>(2) if the claimant is a natural person: name, surname, profession, address, nationality, place and date of birth;</p>\
<p>(3) if the claimant is a legal person: name, form, registered office and the entity representing it for legal purposes;</p>\
<p>(4) name and address of the recipient, or if a legal person, its name and registered office;</p>\
<p>(5) a description of the facts at issue and the precise location;</p>\
<p>(6) the grounds on which the content should be withdrawn, including relevant legal provisions and justification of facts; and</p>\
<p>(7) a copy of the correspondence sent to the author or editor of the litigious information or activity requesting their interruption, withdrawal or modification or an explanation that the author or editor could not be contact.”</p>\
<p>Section 9 (INDEMNIFICATION/LIABILITY): this section is modified as follows:</p>\
<p>The sub-section titled “Indemnification and Release” is deleted in its entirety and replaced with the following:</p>\
<p>“Indemnification. You agree to indemnify, defend, and hold harmless NIKE Inc., its affiliates, officers, directors, employees, agents, licensors and suppliers (the “NIKE Parties”) from and against all claims, losses, liabilities, expenses, damages and costs, including, without limitation, legal fees, arising from or relating in any way to your User Content, your use of Content, your use of the Platform, your conduct in connection with the Platform or with other Platform users, or any violation of these Terms of Use, any law or the rights of any third party.”</p>\
<p>The sub-section titled “LIMITATION OF LIABILITY” is deleted in its entirety.</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): the sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following:</p>\
<p>“Choice of Law/Jurisdiction</p>\
<p>Nothing in this paragraph shall deprive you of the protection afforded to consumers by the mandatory rules of law of the country in which you live.</p>\
<ul>\
<li>You agree that the Platform, Terms, and any dispute between you and NIKE shall be governed in all respects by Dutch law, without regard to choice of law provisions, and not by the 1980 UN Convention on Contracts for the International Sale of Goods.</li>\
<li>Except where prohibited and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved and exclusively in the competent courts of Amsterdam, the Netherlands.</li>\
<li>If you have a complaint, please contact us. If you feel your complaint is not adequately addressed you can – but are not obliged to – use the Online Dispute Resolution (ODR) platform that you can access through http://ec.europa.eu/odr. In addition, you have the right to initiate a mediation procedure by contacting the mediator (s) as follows: Association des médiateurs européens (197, Boulevard Saint-Germain, 75007 PARIS, téléphone: 09 53 01 02 69), http://www.mediationconso-ame.com/. The mediator(s) will attempt to, independently and impartially, reach an amicable resolution of the dispute. In case of mediation, each party is free to accept or reject the solution proposed by the mediator.</li>\
</ul>\
<p class="s-sh">GERMANY</p>\
<p>Section 7 (IMPORTANT DISCLAIMERS): this section is modified as follows:</p>\
<p>The third bullet point in the summary box is deleted in its entirety and replaced with the following:</p>\
<p>“NIKE is not responsible for any damage (except liability for NIKE’s wilful and gross negligent acts and NIKE’s personal injuries) caused by your interactions with other users. Please be responsible and take precautions when interacting with people you don’t know.”</p>\
<p>The last bullet point paragraph under the sub-section titled “PHYSICAL ACTIVITY” is deleted in its entirety and replaced with the following:</p>\
<p>“To the maximum extent allowed by applicable law, NIKE is not responsible or liable for any damages (except liability for NIKE’s wilful and gross negligent acts and NIKE’s personal injuries) you may sustain that result from your use of, or inability to use, the Platform.”</p>\
<p>The sub-section titled “WARRANTY DISCLAIMER”, including all of the bullet points therein, is deleted in its entirety.</p>\
<p>Section 9 (INDEMNIFICATION/LIMITATION OF LIABILITY): this section is modified as follows:</p>\
<p>The sub-section titled “INDEMNIFICATION AND RELEASE” is deleted in its entirety.</p>\
<p>The sub-section titled “LIMITATION OF LIABILITY” is deleted in its entirety and replaced with the following:</p>\
<p>“LIMITATION OF LIABILITY. Any liability of NIKE and its affiliates, and their officers, directors, shareholders, employees and agents (the “Released Parties”) is limited to cases of intent or gross negligence. In cases of slight negligence, the Released Parties are only liable if an essential contractual duty, whose violation endangers the purpose of the contract or whose performance is required to achieve this purpose and in whose performance the consumer trusts (so called “cardinal duties”) has been violated. In this case, the liability is limited to damages that are typical and foreseeable. This limitation of liability does not apply to claims under product liability law and in the case of bodily harm or death.”</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): this section is replaced with the version for European Countries above, except the following is added at the end:</p>\
<p>“All claims shall be brought within two (2) years after the claim arises.”</p>\
<p class="s-sh">HUNGARY</p>\
<p>Introductory Paragraphs: The second bullet point in the first section above titled “Terms of Sale” is amended by adding the following:</p>\
<p>"These Terms constitute an implied agreement between you and NIKE, unless otherwise meeting the requirements of written agreements under Hungarian Law."</p>\
<p class="s-sh">ITALY</p>\
<p>Section 7 (IMPORTANT DISCLAIMERS): this section is modified as follows:</p>\
<p>The last bullet point paragraph under the sub-section titled “PHYSICAL ACTIVITY” is deleted in its entirety and replaced with the following:</p>\
<p>“To the maximum extent allowed by applicable law, NIKE is not responsible or liable for any damages you may sustain that result from your use of, or inability to use, the features on the Platform, except in the event of fraud or gross negligence by Nike.”</p>\
<p>The sub-section titled “USER INTERACTIONS” is deleted in its entirety and replaced with the following:</p>\
<p>“USER INTERACTIONS. We are not responsible for your interactions with other users of the Platform or any damage or harm you may experience because of these interactions, except in the event of fraud or gross negligence by Nike.</p>\
<p>Be responsible and take precautions when interacting with other users (including users you do not know) on the Platform. Before you meet another person face-to-face, consider investigating, bringing a friend, choosing public locations and letting someone know where you will be. NIKE is under no obligation to become involved with any user dispute (but may do so at its own discretion) except in the event of fraud or gross negligence by Nike.”</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): the sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following (except the last bullet point regarding bringing claims, which remains unchanged):</p>\
<p>“Choice of Law/Jurisdiction</p>\
<ul>\
<li>You agree that the Platform, Terms, and any dispute between you and NIKE shall be governed in all respects by Dutch law, without regard to choice of law provisions, and not by the 1980 UN Convention on Contracts for the International Sale of Goods, subject to any statutory provisions of applicable law which may apply regardless of any different choice of law.</li>\
<li>Except where prohibited and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved and exclusively in the court of the place where you are resident or domiciled.”</li>\
</ul>\
<p class="s-sh">POLAND</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): the sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following (except the last bullet point regarding bringing claims, which remains unchanged):</p>\
<p>“Choice of Law/Jurisdiction</p>\
<ul>\
<li>The Platform, Terms, and any dispute between you and NIKE shall be governed in all respects by Polish law.</li>\
<li>All disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved in the courts competent under applicable law.”</li>\
</ul>\
<p class="s-sh">SWITZERLAND</p>\
<p>Section 10 (DISPUTES/ADDITIONAL TERMS): the sub-section titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following (except the last bullet point regarding bringing claims, which remains unchanged):</p>\
<p>“CHOICE OF LAW/JURISDICTION</p>\
<ul>\
<li>You agree that the Platform, Terms, and any dispute between you and NIKE shall be governed in all respects by the substantive laws of Switzerland, without regard to any international conflict of law provisions, and to the exclusion of the 1980 UN Convention on Contracts for the International Sale of Goods.</li>\
<li>You agree that all disputes arising directly or indirectly out of or in connection with the Platform and these Terms of Use, shall be subject to the exclusive jurisdiction of the competent courts of the city of Zurich, Switzerland.”</li>\
</ul>';
		break;
		case 'sale':
			upper='Terms of Sale';
			text='<p class="s-sh">(Western Europe, Central Europe, Eastern Europe) </p>\
<p>These Terms of Sale apply to Western Europe, Central Europe, and Eastern Europe, except Bulgaria, Croatia, Norway, Romania, Slovakia, Switzerland, and Turkey, which are governed by different terms.  </p>\
<p>Please read these Terms of Sale carefully before ordering Products online from the NIKE Platform. </p>\
<p>If you are located in any of the countries identified below, additional country-specific terms may apply to you and are viewable at the end of these Terms of Sale or by clicking on the country reference link. These additional terms override the Terms below to the extent of any inconsistency. </p>\
<p class="s-sh">APPLICABILITY</p>\
<p>You are reading these Terms of Sale (“Terms of Sale”) because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”). These Terms of Sale create a legally binding agreement between you and NIKE and its affiliates (which we may refer to as “NIKE,” “we,” “us,” or “our”) regarding orders placed for products available on the Platform.  Please review our List of Local Entities for the name of the NIKE entity responsible for providing the Platform to you and the appropriate contact information. Nike may revise these Terms of Sale without notice by posting revised Terms of Sale on its Platform.  The Terms of Sale posted on the Platform at the time you place your order on the Platform will govern that purchase.  Please read these terms carefully and check that the details of your order are complete and accurate before submitting your order. Your use of the Platform is also governed by NIKE’s Terms of Use and Privacy Policy. The Terms of Use are incorporated herein by this reference. [See Hungary terms.]. </p>\
<p class="s-sh">PLACING ORDERS ON THE PLATFORM </p>\
<p class="s-sh">ELIGIBILITY TO ORDER</p>\
<p>To place an order on the Platform, you must be at least 16 years old, or older if that is required under applicable law to enter into an agreement with Nike, and a be consumer - not a reseller. </p>\
<p class="s-sh">NO PURCHASE FOR RESALE</p>\
<p>The Platform is intended solely for NIKE to sell NIKE products direct to end consumers, and therefore purchase of products for resale is strictly prohibited. Purchase for resale means the purchase of NIKE product by someone who resells, or intends to resell, the NIKE product to others (consumers, businesses or any third party).  If NIKE believes you are involved in purchase for resale, NIKE reserves the right to take any action against you, including, without limitation, to restrict sales to you, cancel your orders, and/or suspend or close your account.  </p>\
<p class="s-sh">HOW TO ORDER</p>\
<p>You need an email address to place an order, and you may need to set your browser to accept both (functional) cookies and pop-ups in order to be able to use all the functionalities of the Platform, which includes designing customized items, adding items to your shopping bag and submitting your order. </p>\
<p>When you submit an order we will send you an email acknowledging receipt of your order.  Our acceptance of the order takes place when the Products are shipped to you - we will send you an email confirming that the Products have been shipped (“Order Confirmation”). At this point a contract, containing these Terms of Sale, comes into existence and is binding on you and us (the “Contract”). We recommend that you print or download a copy of these Terms of Sale and the relevant Order Confirmation for future reference.  If we are unable to supply you with a product, we will inform you of this in writing and will not process the order.</p>\
<p>[See Poland terms.]</p>\
<p class="s-sh">OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT</p>\
<p>Fulfilment of all orders on the Platform is subject to availability. We explicitly reserve the right not to accept your order for any reason. We also reserve the right to cancel a Contract by written notice to you in the following situations, without being liable for any damage or costs other than repayment of any amount received from you in relation to the Contract we cancelled:</p>\
<ul>\
<li>the product is not available / in stock;</li>\
<li>your billing information is not correct or not verifiable;</li>\
<li>your order is flagged up by our security systems as an unusual order or an order susceptible to fraud;</li>\
<li>you are under 16, or under an older age if an older age is permitted under applicable law to enter into an agreement with Nike;</li>\
<li>you are a reseller;</li>\
<li>there was an error in the price displayed on the Platform; or</li>\
<li>we could not deliver to the address provided by you;</li>\
<li>due to an Event Outside Our Control (see below).</li>\
</ul>\
<p>[See France terms.]</p>\
<p class="s-sh">DATA CHECK</p>\
<p>When you send us your order, we may run some checks on it before it is fulfilled. These checks may include verifying your address and checking for fraud.  We run partly automated checks on all purchases to filter out unusual or suspect transactions, or transactions which can be identified as susceptible to fraud. Suspected fraud on the Platform will be investigated and if necessary prosecuted.</p>\
<p class="s-sh">PRICE/PAYMENT</p>\
<p class="s-sh">PAYMENT METHODS</p>\
<p>You can find the available payment methods for each country in the help section of Nike.com (the “Website”). We do not accept any method of payment other than those listed in the help section. Please do not try to pay by any other way than specified there. If you do, we will not be liable for loss of the payment or any other damages that may result from this action. </p>\
<p class="s-sh">PAYMENT PROCESSING</p>\
<p>If you pay by credit/debit card, we will deduct the amount due from your account as soon as your order leaves our warehouse.  If you pay by bank transfer (only available for bulk orders), we will start delivery (or manufacturing in the case of customized (NIKEiD) products) after we receive your payment. This may take several days. In the event that no payment has been received within 12 calendar days after you submitted your order, your purchase will automatically be cancelled.  Payments can only be processed if the billing information can be verified.  </p>\
<p class="s-sh">TITLE TRANSFER</p>\
<p>We retain title in any product(s) until we have received full payment for such product(s).</p>\
<p class="s-sh">PRICES AND CURRENCY</p>\
<p>The product prices displayed on the Platform are inclusive of Value-Added Tax (VAT), as applicable. Shipping rates are applied per order. The exact shipping rates depend on the country where your order is being delivered to. For details on shipping rates per country see the help section of the Website. </p>\
<p>Prices are quoted in local currency Euro with the exception of UK, Sweden, Norway, Switzerland, and Denmark where prices are quoted in local currency. If you change the country of delivery while browsing or during check out, prices from that moment may be quoted in a different currency. Please note that changing the country of delivery may have an influence on the price due to a change in currency or to country specific pricing. </p>\
<p class="s-sh">YOUR TOTAL PRICE</p>\
<p>The total price specified in the final checkout screen includes tax and shipping costs. This price will be recorded in the Order Confirmation, which we recommend you print or download for future reference. If paying by credit card, the total amount for your entire order will be reflected on your statement in your local currency. </p>\
<p>If your local currency is different from the currency in which the prices are quoted, your bank will apply the exchange rate applicable per the date of purchase. Your bank may apply a different exchange rate, which is beyond our control. </p>\
<p class="s-sh">Cash on delivery (cod)</p>\
<p>If you have chosen the payment method ‘cash on delivery’, the order amount set forth on your shipment confirmation in the local currency of your destination country must be paid in full before receiving your items and signing the delivery sheet. The package can be opened and your items inspected only after the payment is made. </p>\
<p class="s-sh">PRICE CHANGES</p>\
<p>The prices of the products will be as displayed on the Platform. Prices may change from time to time, but changes will not affect any order which we have confirmed in an Order Confirmation. [See Italy terms.]  </p>\
<p class="s-sh">SHIPPING & DELIVERY</p>\
<p class="s-sh">DELIVERY – WHERE AND WHEN</p>\
<p>We do not ship on certain public holidays. Please refer to the help section of the Website for dates and the available delivery times and methods. We can only fulfil an order to a delivery address which is a home or office address in one of the countries listed in the help section of the Website.</p>\
<p class="s-sh">SPLIT DELIVERY</p>\
<p>Where possible, we try to deliver all items which you have ordered at the same time. However, please note that due to the fact that customized (NIKEiD) products are manufactured at different factories, an order for multiple customized (NIKEiD) products may result in split shipments. </p>\
<p>We reserve the right to split the delivery of your order, for instance if part of your order is delayed or unavailable. In the event that we split your order, we will notify you of our intention to do so by sending you an email to the email address provided by you at the time your order was placed. You will not be charged for any additional delivery costs. </p>\
<p class="s-sh">INSPECTION UPON DELIVERY</p>\
<p>Upon delivery, please inspect the packaging for damage. If it appears that the products are damaged, please do not accept the shipment.</p>\
<p class="s-sh">SHIPPING RATES</p>\
<p class="s-sh">FREE SHIPPING</p>\
<p>If you make a purchase that exceeds the threshold relevant to your delivery country, you will receive FREE ‘standard delivery’, or the option of discounted ‘express delivery’. Other conditions may also qualify you for free shipping. See the help section of the Website for threshold amounts and their corresponding discounted delivery rates. </p>\
<p class="s-sh">Customizing items</p>\
<p class="s-sh">Customization conditions</p>\
<p>For most customized (NIKEiD) items, you can submit a combination of letters, spaces and numbers to form an “ID” – a personalized message that appears on your creation.  We reserve the right in our sole discretion to decline an ID, for example because it contains a trademark belonging to third party, or the names of sports teams, athletes or celebrities that you (or NIKE) do not have the right to use, or because it contains material that we consider inappropriate.  If we reject your ID you will be notified as soon as possible by email.</p>\
<p class="s-sh">Consumer acknowledgements relating to customization</p>\
<p>Both your design of the item (the colour combination etc.) and the personalization shall be created by you.  To the extent this is not the case, you hereby guarantee that you are authorized to use the design or the personalization created by someone else. </p>\
<p>Please understand that whilst we have the right to decline your personalization or your design, you are solely responsible for your design and personalization, and we have no obligation to review or decline your design or personalization. </p>\
<p>Your design and your personalization qualify as what we call “User Content”. Article 2 of the Terms of Use applies to your design and your personalization.</p>\
<p class="s-sh">RETURNS & CANCELLATIONS</p>\
<p class="s-sh">CANCELLING ORDER BEFORE DELIVERY</p>\
<p>You may cancel any order free of charge and without giving us any reason, provided it has not yet been shipped. We begin processing orders placed at our online store almost immediately. If you wish to cancel your order, please check the status of your order first by visiting the "Order status" link at the top right of the Website. </p>\
<p>If the status of your order is "Pending" or "On Hold" you may cancel your order by contacting our call centre (see help section of the Website). Our consumer service agents will request a cancellation of your order at our warehouse. If successful, they will send you an email and the cancellation will be free of charge. If cancellation is not possible, the product(s) will be delivered to you and may be returned in accordance with the procedure set out below. </p>\
<p>Customized (NIKEiD) orders cannot be cancelled before shipment, because we start building the customized (NIKEiD) products immediately after receiving the order. </p>\
<p class="s-sh">RETURNING ORDERS AFTER DELIVERY – DEFECTIVE PRODUCTS</p>\
<p>You are entitled to return products delivered to you in the event that they are defective or otherwise not in conformity with your order when you received them. In the event your claim is justified, the purchase price and the shipping costs will be refunded. For practical information on how to return, see the help section of the Website. </p>\
<p>We moreover remind you that under Dutch and EU law, we are liable to you for any lack of conformity in a product that becomes apparent within a minimum of two years from delivery of the product and that you have several statutory rights in this context. The foregoing does not limit these statutory rights in any way. [See France and Italy terms.] </p>\
<p class="s-sh">YOUR RIGHT OF WITHDRAWAL</p>\
<p>If for whatever reason you are not happy with a product you ordered, you may exercise your statutory right of withdrawal. You can invoke your right of withdrawal by informing us that you want to return the product within 30 calendar days after the product is delivered to you or to a third party indicated by you (other than the carrier) or, if you have ordered multiple goods in one order which are delivered separately, within 30 calendar days after the last product is delivered, without giving us any reason. </p>\
<p>If you use your right of withdrawal, you have an obligation to return the products to us without undue delay and no later than 30 calendar days from the day on which you have communicated to us that you invoke your right of withdrawal.</p>\
<p>Please make sure that the products you return are complete (e.g. both items of a pair must be returned) and not used in any way other than what is reasonably necessary to decide if you want to keep the products (meaning that you are allowed to try garments or shoes on for fit, but you cannot wear or wash them). If you do not comply with the foregoing and the value of the product diminishes as a consequence thereof, we can hold you liable for such diminished value. The right of withdrawal does not apply if the product is made to your specification or clearly personalized (for example: NIKEiD products). </p>\
<p>For practical information on how to return, see the help section of the Platform, which contains a withdrawal form that you can use to exercise your right of withdrawal. You can also inform us that you want to exercise your right of withdrawal by another unequivocal statement (e.g. by a letter, fax or email). It is sufficient that you send this statement to us before the withdrawal period ends. </p>\
<p>If you inform us that you wish to return a product, we shall reimburse to you all payments received, including the delivery costs (with the exception of any supplementary costs resulting from your choice of delivery other than the least expensive type of standard delivery offered by us) without undue delay and in any event not later than 30 days from the day on which we are informed about your decision to exercise your right of withdrawal. We may however choose to withhold the reimbursement until we have received the products back or until you have supplied evidence of having sent back the products. </p>\
<p class="s-sh">REFUND INFORMATION</p>\
<p>Refunds will be issued based on the original form of payment. If you paid via bank transfer you need to give this information to Customer Service when you initiate the return so that we can refund the money directly to your account.  For practical information on how to return and for refund timelines, see here. </p>\
<p class="s-sh">CONDITIONS APPLICABLE TO PRE-ORDERED PRODUCTS</p>\
<p>Pre-order is the process by which you are able to order a product in advance of the scheduled retail launch. Due to the nature of pre ordering, the following specific conditions apply to pre-ordered products: </p>\
<p>Delivery. Pre-ordered products are targeted to be delivered before the retail launch date, provided that we have received your payment at least 3 working days before such date. Concrete delivery times depend on the moment the product is available in our warehouse. Standard delivery timelines will apply from the moment the pre-ordered product is available in our warehouse. This information is best estimates only, timelines are not binding. </p>\
<p>Payment. Unless you have chosen for payment upon or after delivery, the following applies. Your payment will be deducted as soon as the order is received (or, in the event of bank transfer, as soon as possible). We will not start the execution of your order prior to having received payment. For bank transfers this may mean that delivery will be later than set out under the bullet point above. </p>\
<p>Product launch date. The scheduled retail launch date (product launch) for your pre-order product can be found in the product description page on the Website.</p>\
<p class="s-sh">EVENTS OUTSIDE OUR CONTROL</p>\
<p>An Event Outside Our Control means any act or event beyond our reasonable control, including without limitation strikes, lock-outs or other industrial action by third parties, civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war, fire, explosion, storm, flood, earthquake, subsidence, epidemic, pandemic, or other natural disaster, or failure of public or private telecommunications networks. </p>\
<p>If an Event Outside Our Control takes place that affects the performance of our obligations under these Terms of Sale:</p>\
<p>a) 	We will contact you as soon as reasonably possible to notify you; and</p>\
<p>b) 	Our obligations under these general conditions will be suspended and the time for performance of our obligations will be extended for the duration of the Event Outside Our Control. </p>\
 <p>Where the Event Outside Our Control affects our delivery of a product to you, we will arrange a new delivery date with you after the Event Outside Our Control is over.  You may cancel the contract if an Event Outside Our Control takes place and you no longer wish us to provide the products. Please see your cancellation rights under Cancellation above. </p>\
<p class="s-sh">OTHER IMPORTANT TERMS</p>\
<p>We may transfer our rights and obligations under a contract to another organization, but this will not affect your rights or our obligations under these Terms of Sale. </p>\
<p>You may only transfer your rights or your obligations under these Terms of Sale to another person if we agree in writing. </p>\
<p>We contract with US Direct E-Commerce Limited trading as eShopWorld to sell and deliver our products to consumers in Bulgaria, Croatia, Norway, Romania, Slovakia, Switzerland, and Turkey. If your order is shipping to one of the aforementioned countries where our international shipping is supported by eShopWorld, the contract for the purchase sale and delivery of our products will be between you and eShopWorld, and subject to the eShopWorld Terms and Conditions.  If there is a conflict between these Terms of Sale and the eShopWorld Terms and Conditions, the eShopWorld Terms and Conditions will control with respect to your purchase and the delivery of our products. </p>\
<p>Each of the paragraphs of these Terms of Sale operates separately. If any court or relevant authority decides that any of them are unlawful or unenforceable, the remaining paragraphs will remain in full force and effect.</p>\
<p>If we fail to insist that you perform any of your obligations under these Terms of Sale, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. </p>\
<p>If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you. We will not file a copy of the contract between us. </p>\
<p class="s-sh">CHOICE OF LAW/JURISDICTION</p>\
<p>You agree that the Platform, Terms of Sale, and any dispute between you and NIKE shall be governed in all respects by Dutch law, without regard to choice of law provisions, and not by the 1980 U.N. Convention on Contracts for the International Sale of Goods. </p>\
<p>Except where prohibited and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved individually, without resort to any form of class action, and exclusively in the competent courts of London, the United Kingdom. </p>\
<p>In case you have a complaint, please contact us via contact us page first. If you feel your complaint is not adequately addressed you can – but are not obliged to – use the Online Dispute Resolution (ODR) platform that you can access through http://ec.europa.eu/odr. </p>\
<p>All claims shall be brought within one (1) year after the claim arises, to the extent allowed under applicable law. [See Austria, France, Germany, Italy and Poland terms.] </p>\
<p class="s-sh">COUNTRY-SPECIFIC TERMS </p>\
<p>If you are located in one of the following countries, the additional terms below will apply and override any inconsistent terms set forth above. </p>\
<p class="s-sh">AUSTRIA </p>\
<p>The last paragraph in the section above titled “CHOICE OF LAW/JURISDICTION”, is deleted in its entirety and replaced with the following: </p>\
<p>“All claims shall be brought within three (3) years after the claim arises.” </p>\
<p class="s-sh">FRANCE </p>\
<p>The section above titled “PLACING ORDERS ON THE PLATFORM”, sub-section “OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT” is deleted in its entirety and replaced with the following: </p>\
<p class="s-sh">“OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT</p>\
<p>We reserve the right to cancel a Contract by written notice to you in the following situations, without being liable for any damage or costs other than repayment of any amount received from you in relation to the Contract we cancelled:</p>\
<ul>\
<li>your billing information is not correct or not verifiable;</li>\
<li>your order is flagged up by our security systems as an unusual order or an order susceptible to fraud;</li>\
<li>you are under 16, or under an older age if an older age is permitted under applicable law to enter into an agreement with Nike;</li>\
<li>you are a reseller;</li>\
<li>we could not deliver to the address provided by you; or</li>\
<li>due to an Event Outside Our Control (see below).” </li>\
</ul>\
<p>The section above titled “RETURNS & CANCELLATIONS”, sub-section “RETURNING ORDERS AFTER DELIVERY – DEFECTIVE PRODUCTS” is hereby deleted in its entirety and replaced with the following: </p>\
<p>"Nike, Colosseum 1, 1213 UK London, The United Kingdom, shall be responsible for any lack of conformity of the products under the conditions set forth in Articles L. 217-4 et seq. of the French consumer code, and of hidden defect of these products under the conditions set forth in Articles 1641 et seq. of the French civil code. In the event your claim is justified, the purchase price and the shipping costs will be refunded.  For practical information on how to return, visit our help section.”</p>\
<p>Please note that under the legal warranty of conformity, you: </p>\
<ul>\
<li>have 2 years as of delivery of the product to submit a claim;</li>\
<li>may choose between repair or replacement of the product, subject to the cost conditions provided for under Article L. 217-9 of the French consumer code;</li>\
<li>do not have to prove the product’s lack of conformity during a period of two (2) years following delivery of the product. </li>\
</ul>\
<p>Please note that under the legal warranty of conformity, you: </p>\
<p>have 2 years as of delivery of the product to submit a claim;</p>\
<p>may choose between repair or replacement of the product, subject to the cost conditions provided for under Article L. 217-9 of the French consumer code;</p>\
<p>do not have to prove the product’s lack of conformity during a period of two (2) years following delivery of the product. </p>\
<p>The legal warranty of conformity is without prejudice to any commercial warranty that may be provided. </p>\
<p>You may also decide to act under the legal warranty against hidden defect as per Article 1641 of the French civil code. In such case, you may choose between cancellation of the sale or a reduction of the sale price, as set forth under Article 1644 of the French civil code."</p>\
<p>The second and third paragraph in the section titled “CHOICE OF LAW/JURISDICTION” are deleted in their entirety and replaced with the following two paragraphs: </p>\
<p>“Except where prohibited and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products), and exclusively in the competent courts of Amsterdam, the Netherlands. </p>\
<p>If you have a complaint, please contact us via contact us page first. If you feel your complaint is not adequately addressed you can – but are not obliged to – use the Online Dispute Resolution (ODR) platform that you can access through http://ec.europa.eu/odr.  In addition, you have the right to initiate a mediation procedure by contacting the mediator (s) as follows:Association des Médiateurs Européens (197, Boulevard Saint-Germain, 75007 PARIS, téléphone: 09 53 01 02 69), http://www.mediationconso-ame.com/. The mediator(s) will attempt to, independently and impartially, reach an amicable resolution of the dispute.  In case of mediation, each party is free to accept or reject the solution proposed by the mediator.”</p>\
<p class="s-sh">“PRICE CHANGES</p>\
<p>The prices of the products will be as displayed on the Platform. Prices may change from time to time, but changes will not affect any order you submitted even if not yet confirmed in an Order Confirmation.” </p>\
<p>The section above titled “RETURNS & CANCELLATIONS”, sub-section “RETURNING ORDERS AFTER DELIVERY – DEFECTIVE PRODUCTS” is hereby deleted in its entirety and replaced with the following: </p>\
<p class="s-sh">“RETURNING ORDERS AFTER DELIVERY – DEFECTIVE PRODUCTS</p>\
<p>Nike pursuant to article 130 of the Consumer Code, guarantees the conformity of any sold goods for a period of two years after the delivery of the goods. Without prejudice to any statutory rights provided in your favour by applicable law, in the case of a lack of conformity, you shall be entitled to have the goods brought into conformity free of charge by repair or replacement or to have an appropriate reduction made in the price or the contract terminated with regard to those goods, in accordance with article 130 of the Consumer Code.You are entitled to exercise the above rights, in the event any products are defective or otherwise not in conformity with your order when you received them, provided that you inform us of the lack of conformity within a period of two months from the date on which you detected such lack of conformity. In the event your claim is justified, the purchase price and the shipping costs will be refunded. For practical information on how to return, see the help section of the Website.” </p>\
<p>The second paragraph in the section above titled “CHOICE OF LAW/JURISDICTION”, is deleted in its entirety and replaced with the following two paragraphs:</p>\
<p>“Regardless of the above choice of law, be reminded that you will enjoy the statutory rights provided in your favour under Section 1, Title III of the Italian Consumer Code (Legislative Decree no. 206/2005).”</p>\
<p>“Except where prohibited and without limitation to any of your statutory rights, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved individually, without resort to any form of class action, and exclusively in the court of the place where you are resident or domiciled.”</p>\
<p class="s-sh">POLAND </p>\
<p>The section above titled “CHOICE OF LAW/JURISDICTION” is deleted in its entirety and replaced with the following: </p>\
<p class="s-sh">“CHOICE OF LAW/JURISDICTION </p>\
<p>You agree that the Platform, Terms of Sale, and any dispute between you and NIKE shall be governed in all respects by Polish law. </p>\
<p>Except where prohibited and without limitation to any statutory rights for consumers, you agree that all disputes, claims and legal proceedings directly or indirectly arising out of or relating to the Platform (including but not limited to the purchase of NIKE products) shall be resolved individually, without resort to any form of class action, and exclusively in the courts competent under applicable law. </p>\
<p>In case you have a complaint or feel there is a dispute between us, please contact us via contact us page first. In case the dispute between us is not resolved you can – but are not obliged to – use the Online Dispute Resolution (ODR) platform that you can access through http://ec.europa.eu/odr.” </p>\
<p>The section above titled “HOW TO ORDER” is amended by adding the following:</p>\
<p>“By accepting these Terms of Sale, you:</p>\
<p>(a) Request that an invoice will be issued for your purchase and</p>\
<p>(b) Agree that said invoice will be issued in an electronic format and will be provided to you by email.”</p>\
<p>Date of Last Revision: February 2023 – WE/CEE</p>';
			break;
		  // more cases can be added as needed

		case 'fraud':
			upper='Report Fraud';
			text='<p>Have you uncovered or suspect you may be ensnared in fraudulent activities involving our esteemed Nike brand? Whether encountering suspicious social media accounts, counterfeit websites, or unauthorized apps misappropriating Nike\'s intellectual property, rest assured that we treat these matters with the utmost gravity and urge you to promptly alert us.</p>\
<p class="s-sh">How to discern potential scams:</p>\
<p><b>Email Authentication:</b> When receiving electronic communications, meticulously scrutinize the sender\'s address to ensure it originates from an official Nike domain. Should uncertainty arise, do not hesitate to seek verification from our trusted channels.</p>\
<p><b>Payment Cautions:</b> Save for transactions conducted on our authorized platform, shopnike.co.uk, we categorically abstain from soliciting payments for engagement in competitions, raffles, or other promotional endeavors. Any such solicitations should be met with immediate suspicion.</p>\
<p class="s-sh">In the event of suspected fraudulent activity:</p>\
<p><b>Report Promptly:</b> Kindly notify us expeditiously upon encountering any dubious behavior. When filing a report, furnish the URL of the implicated website or, if applicable, append the original email for thorough investigation.</p>\
<p><b>Law Enforcement Collaboration:</b> Should you find yourself ensnared in fraudulent machinations, we strongly advocate for promptly engaging law enforcement authorities to address the matter.</p>\
<p class="s-sh">We stand ready to assist:</p>\
<p>Contact our dedicated customer service team at support@nike.com for immediate assistance or further elucidation. The integrity of the Nike brand and your trust therein is paramount, and we remain resolute in addressing any concerns with expediency and diligence.</p>';
			break;
		  default:
		    // code to be executed if none of the cases match
		    check++;
		}

		if(check==0){
			$(".modal .upper-text").text(upper);
			$(".modal .modal-inner").html(text);


			$('body').addClass("modal-active");
		}
	});

});