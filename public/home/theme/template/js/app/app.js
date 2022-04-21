let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let persian = document.getElementById("persian");
let french = document.getElementById("french");
let chinese = document.getElementById("chinese");

let logo = document.getElementById("logo");

// Navbar
//let homeLang = document.getElementById("homeLang");
let issuesTab = document.getElementById("issuesTab");
let dialoguesTab = document.getElementById("dialoguesTab");
let reportsTab = document.getElementById("reportsTab");
let magazinesTab = document.getElementById("magazinesTab");
let booksTab = document.getElementById("booksTab");
let videosTab = document.getElementById("videosTab");
let authorsTab = document.getElementById("authorsTab");

let search = document.getElementById("search");
let searchButton = document.getElementById("searchButton");

let issueSectionTitle = document.getElementById("issueSectionTitle");
let dialogueSectionTitle = document.getElementById("dialogueSectionTitle");
let reportSectionTitle = document.getElementById("reportSectionTitle");
let magazineSectionTitle = document.getElementById("magazineSectionTitle");
let videoSectionTitle = document.getElementById("videoSectionTitle");
let bookSectionTitle = document.getElementById("bookSectionTitle");


let moreIssues = document.getElementById("moreIssues");
let moreDialogues = document.getElementById("moreDialogues");
let moreMagazines = document.getElementById("moreMagazines");
let moreVideos = document.getElementById("moreVideos");


let footerContent = document.getElementById("footerContent");

arabic.onclick = () => {
	setLanguage("arabic");
	localStorage.setItem("Lang", "arabic");
};

english.onclick = () => {
	setLanguage("english");
	localStorage.setItem("Lang", "english");
};

persian.onclick = () => {
	setLanguage("persian");
	localStorage.setItem("Lang", "persian");
};

french.onclick = () => {
	setLanguage("french");
	localStorage.setItem("Lang", "french");
};

chinese.onclick = () => {
	setLanguage("chinese");
	localStorage.setItem("Lang", "chinese");
};

onload = () => {
	setLanguage(localStorage.getItem("Lang"));
};

function setLanguage(getLanguage){
	if(getLanguage === "arabic"){
		//logo.innerHTML = '<img src="{{ asset('theme/img/template/logos/logo.png') }}">';
		//homeLang.innerHTML = "الرئيسية";
		issuesTab.innerHTML = "دراسات";
		dialoguesTab.innerHTML = "حوارات";
		reportsTab.innerHTML = "تقارير";
		magazinesTab.innerHTML = "مجلات";
		booksTab.innerHTML = "كتب";
		videosTab.innerHTML = "فيديوهات";
		aboutUsTab.innerHTML = "من نحن";
		authorsTab.innerHTML = "الباحثون";
		search.innerHTML = "البحث";
		searchButton.innerHTML = "بحث";
		issueSectionTitle.innerHTML = "دراسات";
		dialogueSectionTitle.innerHTML = "حوارات";
		reportSectionTitle.innerHTML = "تقارير";
		magazineSectionTitle.innerHTML = "مجلات";
		videoSectionTitle.innerHTML = "فيديوهات";
		bookSectionTitle.innerHTML = "كتب";
		moreIssues.innerHTML = "الكل";
		moreDialogues.innerHTML = "الكل";
		moreMagazines.innerHTML = "الكل";
		moreVideos.innerHTML = "الكل";
		footerContent.innerHTML = "مركز الرياض للدراسات السياسية والاستراتيجية © 2022";
	}
	else if(getLanguage === "english"){
		//logo.innerHTML = '<img src="{{ asset('theme/img/template/logos/logo.png') }}">';
		//homeLang.innerHTML = "Home";
		issuesTab.innerHTML = "Issues";
		dialoguesTab.innerHTML = "Dialogues";
		reportsTab.innerHTML = "Reports";
		magazinesTab.innerHTML = "Magazines";
		booksTab.innerHTML = "Books";
		videosTab.innerHTML = "Videos";
		aboutUsTab.innerHTML = "About Us";
		authorsTab.innerHTML = "Authors";
		search.innerHTML = "Search ...";
		searchButton.innerHTML = "Search";
		issueSectionTitle.innerHTML = "Issues";
		dialogueSectionTitle.innerHTML = "Dialogues";
		reportSectionTitle.innerHTML = "Reports";
		magazineSectionTitle.innerHTML = "Magazines";
		videoSectionTitle.innerHTML = "Videos";
		bookSectionTitle.innerHTML = "Books";
		moreIssues.innerHTML = "All";
		moreDialogues.innerHTML = "All";
		moreMagazines.innerHTML = "All";
		moreVideos.innerHTML = "All";
		footerContent.innerHTML = "Riyadh Center for Political & Strategical Studies © 2022";
	}
	else if(getLanguage === "persian"){
		//logo.innerHTML = '<img src="{{ asset('theme/img/template/logos/ir-logo.') }}png">';
		//homeLang.innerHTML = "صفحه اصلی";
		issuesTab.innerHTML = "تحقیقات";
		dialoguesTab.innerHTML = "دیالوگ";
		reportsTab.innerHTML = "گزارش";
		magazinesTab.innerHTML = "مجلات";
		booksTab.innerHTML = "كتاب";
		videosTab.innerHTML = "فیلم های";
		aboutUsTab.innerHTML = "درباره ما";
		authorsTab.innerHTML = "نویسندگان";
		search.innerHTML = "جستجو کردن ...";
		searchButton.innerHTML = "جستجو کردن";
		issueSectionTitle.innerHTML = "تحقیقات";
		dialogueSectionTitle.innerHTML = "دیالوگ";
		reportSectionTitle.innerHTML = "گزارش";
		magazineSectionTitle.innerHTML = "مجلات";
		videoSectionTitle.innerHTML = "فیلم های";
		bookSectionTitle.innerHTML = "كتاب";
		moreIssues.innerHTML = "همه";
		moreDialogues.innerHTML = "همه";
		moreMagazines.innerHTML = "همه";
		moreVideos.innerHTML = "همه";
		footerContent.innerHTML = "مرکز مطالعات سیاسی و استراتژیک ریاض © 2022";
	}
	else if(getLanguage === "french"){
		//logo.innerHTML = '<img src="{{ asset('theme/img/template/logos/fr-logo.') }}png">';
		//homeLang.innerHTML = "Accueil";
		issuesTab.innerHTML = "Recherches";
		dialoguesTab.innerHTML = "Dialogues";
		reportsTab.innerHTML = "Rapports";
		magazinesTab.innerHTML = "Magazines";
		booksTab.innerHTML = "Livres";
		videosTab.innerHTML = "Vidéos";
		aboutUsTab.innerHTML = "Sur";
		authorsTab.innerHTML = "Auteures";
		search.innerHTML = "Chercher ...";
		searchButton.innerHTML = "Chercher";
		issueSectionTitle.innerHTML = "Recherches";
		dialogueSectionTitle.innerHTML = "Dialogues";
		reportSectionTitle.innerHTML = "Rapports";
		magazineSectionTitle.innerHTML = "Magazines";
		videoSectionTitle.innerHTML = "Vidéos";
		bookSectionTitle.innerHTML = "Livres";
		moreIssues.innerHTML = "Toute";
		moreDialogues.innerHTML = "Toute";
		moreMagazines.innerHTML = "Toute";
		moreVideos.innerHTML = "Toute";
		footerContent.innerHTML = "Centre d'études politiques et stratégiques de Riyad © 2022";
	}
	else if(getLanguage === "chinese"){
		//logo.innerHTML = '<img src="{{ asset('theme/img/template/logos/cn-logo.') }}png">';
		//homeLang.innerHTML = "家";
		issuesTab.innerHTML = "研究";
		dialoguesTab.innerHTML = "对话";
		reportsTab.innerHTML = "报告";
		magazinesTab.innerHTML = "杂志";
		booksTab.innerHTML = "图书";
		videosTab.innerHTML = "视频";
		aboutUsTab.innerHTML = "关于我们";
		authorsTab.innerHTML = "作者";
		search.innerHTML = "搜索 ...";
		searchButton.innerHTML = "搜索";
		issueSectionTitle.innerHTML = "研究";
		dialogueSectionTitle.innerHTML = "对话";
		reportSectionTitle.innerHTML = "报告";
		magazineSectionTitle.innerHTML = "杂志";
		videoSectionTitle.innerHTML = "视频";
		bookSectionTitle.innerHTML = "图书";
		moreIssues.innerHTML = "全部";
		moreDialogues.innerHTML = "全部";
		moreMagazines.innerHTML = "全部";
		moreVideos.innerHTML = "全部";
		footerContent.innerHTML = "利雅得政治与战略研究中心 © 2022";
	}
}