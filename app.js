// GLOBAL APP DEFINITION
window.app = {
    data: {
        wa: "6285163666350",
        passkey: "triversa12pro",
        currentAuthAction: null,
        currentAuthId: null,
        currentLang: 'id',
        
        // TRANSLATIONS
        translations: {
            id: {
                est: "Established: 12 Nov 2025",
                hero_title: "Creative Solutions", hero_subtitle: "For Brand Identity", hero_desc: "TRIVERSA adalah jembatan masa depan digital Anda.", hero_tagline: "\"Sekali Klik, Masalahmu Selesai.\"", cta_explore: "Mulai Jelajahi",
                gateway_title: "Gerbang Ekosistem", recruit_title: "Karir & Rekrutmen", recruit_desc: "Bergabunglah dengan tim inovator kami.", btn_apply: "LAMAR SEKARANG", consult_title: "Konsultasi & Mitra", consult_desc: "Punya ide atau proyek besar?", btn_contact: "HUBUNGI KAMI",
                services_title: "Layanan & Jasa", services_desc: "Solusi spesifik untuk setiap kebutuhan digital Anda.", dept_title: "Struktur Organisasi", dept_subtitle: "Pilar-pilar departemen yang menopang kualitas TRIVERSA.", owners_title: "EXECUTIVE PARTNERS", owners_desc: "Para visioner di balik kemudi TRIVERSA.",
                community_title: "Komunitas Triversa", community_desc: "\"Abadikan momenmu bersama TRIVERSA.\"", gallery_header: "Galeri Aktivitas", review_header: "Suara Pengguna", review_sub: "Feedback nyata dari klien kami.", quote_main: "\"Jika KREATIVITAS-mu mampu memicu perubahan, jangan pernah menutup diri untuk BERKEMBANG.\"", quote_sub: "Dunia menanti jejak inovasimu.",
                start_from: "Mulai dari", currency: "Rp", btn_order: "PESAN SEKARANG", view_team: "Lihat Tim & Tugas",
                vision_title: "Visi", vision_text: "Menjadi penyedia layanan kreatif dan digital yang paling terpercaya, efektif, dan berdampak, dengan memberikan solusi yang cepat, tepat, dan bernilai tinggi bagi setiap kebutuhan masyarakat maupun bisnis.",
                mission_title: "Misi", missions: ["Menciptakan solusi digital dan kreatif yang mudah diakses hanya dengan satu klik.", "Memberikan layanan profesional yang mengutamakan kualitas, kecepatan, dan kemanfaatan.", "Menyediakan desain, layanan media, dan solusi teknologi yang inovatif bagi setiap klien.", "Menjadi wadah kreativitas yang memberdayakan anak muda untuk berkarya dan menjadi berkat.", "Mengutamakan integritas, transparansi, dan kepuasan pengguna sebagai fondasi layanan.", "Menghadirkan pengalaman pelayanan yang ramah, proaktif, dan tepat sasaran."],
                values_title: "Nilai Utama (Core Values)", val_1_title: "Kreativitas", val_1_desc: "Kami percaya bahwa setiap ide unik memiliki kekuatan untuk mengubah dunia.", val_2_title: "Kolaborasi", val_2_desc: "Bersama, kami menciptakan solusi yang lebih besar dari sekadar karya.", val_3_title: "Kebermanfaatan", val_3_desc: "Setiap layanan kami dirancang untuk memberi nilai nyata bagi pengguna.", val_4_title: "Integritas", val_4_desc: "Kami bekerja dengan kejujuran, tanggung jawab, dan dedikasi tinggi.", val_5_title: "Berkat", val_5_desc: "Setiap langkah kami ditujukan untuk menjadi saluran kebaikan bagi banyak orang."
            },
            en: {
                est: "Established: Nov 12, 2025",
                hero_title: "Creative Solutions", hero_subtitle: "For Brand Identity", hero_desc: "TRIVERSA is your digital future bridge.", hero_tagline: "\"One Click, Your Problem Solved.\"", cta_explore: "Start Exploring",
                gateway_title: "Ecosystem Gateway", recruit_title: "Career & Recruitment", recruit_desc: "Join our team of innovators.", btn_apply: "APPLY NOW", consult_title: "Consultation & Partner", consult_desc: "Have a big idea or project?", btn_contact: "CONTACT US",
                services_title: "Services & Products", services_desc: "Specific solutions for every digital need.", dept_title: "Organizational Structure", dept_subtitle: "The departmental pillars.", owners_title: "EXECUTIVE PARTNERS", owners_desc: "The visionaries behind TRIVERSA.",
                community_title: "Triversa Community", community_desc: "\"Capture your moments with TRIVERSA.\"", gallery_header: "Activity Gallery", review_header: "User Voices", review_sub: "Real feedback from our clients.", quote_main: "\"If your CREATIVITY can spark change, never close yourself off to GROWTH.\"", quote_sub: "The world awaits your innovation.",
                start_from: "Starts from", currency: "IDR", btn_order: "ORDER NOW", view_team: "View Team & Duties",
                vision_title: "Vision", vision_text: "To be the most trusted, effective, and impactful creative and digital service provider, delivering fast, precise, and high-value solutions for every community and business need.",
                mission_title: "Mission", missions: ["Create easily accessible digital and creative solutions with just one click.", "Provide professional services prioritizing quality, speed, and utility.", "Deliver innovative design, media services, and technology solutions for every client.", "Become a creative hub empowering youth to create and be a blessing.", "Prioritize integrity, transparency, and user satisfaction as the foundation of service.", "Present a friendly, proactive, and targeted service experience."],
                values_title: "Core Values", val_1_title: "Creativity", val_1_desc: "We believe every unique idea has the power to change the world.", val_2_title: "Collaboration", val_2_desc: "Together, we create solutions greater than just works.", val_3_title: "Utility", val_3_desc: "Every service is designed to provide real value to users.", val_4_title: "Integrity", val_4_desc: "We work with honesty, responsibility, and high dedication.", val_5_title: "Blessing", val_5_desc: "Every step is aimed at being a channel of goodness for many."
            },
            // Placeholder for other languages (auto-fallback to English logic applied if missing keys)
            jp: { hero_title: "創造的ソリューション", hero_tagline: "「ワンクリックで問題解決」", start_from: "価格", currency: "IDR", btn_order: "今すぐ注文", services_title: "サービスと製品" },
            kr: { hero_title: "창의적인 솔루션", hero_tagline: "「한 번의 클릭으로 문제 해결」", start_from: "시작 가격", currency: "IDR", btn_order: "지금 주문", services_title: "서비스 및 제품" },
            cn: { hero_title: "创意解决方案", hero_tagline: "“一键解决您的问题”", start_from: "起价", currency: "IDR", btn_order: "立即订购", services_title: "服务与产品" },
            es: { hero_title: "Soluciones Creativas", hero_tagline: "\"Un clic, problema resuelto\"", start_from: "Desde", currency: "IDR", btn_order: "ORDENAR AHORA", services_title: "Servicios y Productos" },
            fr: { hero_title: "Solutions Créatives", hero_tagline: "\"Un clic, problème résolu\"", start_from: "À partir de", currency: "IDR", btn_order: "COMMANDER", services_title: "Services et Produits" },
            de: { hero_title: "Kreative Lösungen", hero_tagline: "\"Ein Klick, Problem gelöst\"", start_from: "Ab", currency: "IDR", btn_order: "JETZT BESTELLEN", services_title: "Dienstleistungen" },
            ru: { hero_title: "Творческие решения", hero_tagline: "\"Один клик, проблема решена\"", start_from: "От", currency: "IDR", btn_order: "ЗАКАЗАТЬ", services_title: "Услуги и Продукты" },
            ar: { hero_title: "حلول إبداعية", hero_tagline: "\"نقرة واحدة ، تم حل مشكلتك\"", start_from: "يبدأ من", currency: "IDR", btn_order: "اطلب الآن", services_title: "الخدمات والمنتجات" }
        },

        // SERVICES DATA
        services: [
            { id: 1, name: "WEB ARCHITECTURE & UI/UX", tag: "#DEV", desc: "Solusi website profesional dengan desain responsif.", price: "1.000.000", icon: "fa-laptop-code" },
            { id: 2, name: "CINEMATIC VISUALS: WEDDING", tag: "#MEDIA", desc: "Dokumentasi momen sakral dengan kualitas sinematik.", price: "2.500.000", icon: "fa-video" },
            { id: 3, name: "MILESTONE MOMENTS: GRADUATION", tag: "#MEDIA", desc: "Foto outdoor/indoor fleksibel dengan hasil tajam.", price: "450.000", icon: "fa-graduation-cap" },
            { id: 4, name: "PRO-GEAR RENTAL HUB", tag: "#GEAR", desc: "Sewa kamera, lensa, lighting profesional.", price: "250.000", icon: "fa-camera" },
            { id: 5, name: "POWER VISUALS: PRESENTATION", tag: "#DESIGN", desc: "Slide pitch deck bisnis atau seminar yang memukau.", price: "100.000", icon: "fa-file-powerpoint" },
            { id: 6, name: "SOCIAL GROWTH MANAGEMENT", tag: "#SOCIAL", desc: "Konten kalender, desain feed, copywriting, hashtag.", price: "200.000", icon: "fa-hashtag" },
            { id: 7, name: "ACADEMIC RESEARCH SUPPORT", tag: "#EDU", desc: "Bantuan referensi jurnal, formatting, konsultasi.", price: "500.000", icon: "fa-book-open" },
            { id: 8, name: "SEO & DIGITAL DOMINANCE", tag: "#MARKETING", desc: "Dominasi Google, traffic organik, konversi tinggi.", price: "1.800.000", icon: "fa-chart-line" },
            { id: 9, name: "FULL-SPECTRUM BRANDING", tag: "#IDENTITY", desc: "Logo, palet warna, tipografi, Brand Guidelines.", price: "1.500.000", icon: "fa-fingerprint" },
            { id: 10, name: "MOTION GRAPHICS & VFX", tag: "#ANIMATION", desc: "Video explainer, iklan medsos, intro logo dinamis.", price: "800.000", icon: "fa-film" },
            { id: 11, name: "INTELLIGENT AI INTEGRATION", tag: "#AI", desc: "Asisten Virtual AI 24/7, integrasi data bisnis.", price: "2.000.000", icon: "fa-robot" },
            { id: 12, name: "PERSUASIVE COPYWRITING", tag: "#WRITING", desc: "Naskah iklan FB/Google Ads, caption Instagram.", price: "300.000", icon: "fa-pen-nib" },
            { id: 13, name: "BUSINESS DATA INTELLIGENCE", tag: "#DATA", desc: "Grafik dashboard interaktif untuk keputusan bisnis.", price: "750.000", icon: "fa-chart-pie" },
            { id: 14, name: "SERVER RELIABILITY OPS", tag: "#IT", desc: "Update keamanan, backup, monitoring uptime.", price: "400.000", icon: "fa-server" },
            { id: 15, name: "E-COMMERCE POWERHOUSE", tag: "#BIZ", desc: "Toko online fitur lengkap, payment gateway, stok.", price: "3.500.000", icon: "fa-store" }
        ],

        // OWNERS & DEPARTMENTS
        owners: [
            { id: 1, name: "Christovano Andalangi", role: "Chief Technology Officer (CTO)", prev: "Kreativ Lab Evo", ig: "chrstov_", img: "https://ui-avatars.com/api/?name=Irwandi+C&background=6366f1&color=fff" },
            { id: 2, name: "Karpolin Manik", role: "Chief Visionary Officer (CVO)", prev: "MVP Rental", ig: "karpulin_manik15", img: "https://ui-avatars.com/api/?name=Karpolin+M&background=d946ef&color=fff" },
            { id: 3, name: "Ranubaya Enoch", role: "Chief Creative Officer (CCO)", prev: "LENS OF RANU", ig: "ranss_sholeh", img: "https://ui-avatars.com/api/?name=Ranubaya+E&background=06b6d4&color=fff" }
        ],
        departments: [
            { id: 1, name: "Departemen Kreatif & Strategi Visual", icon: "fa-paint-brush", desc: "Jantung artistik Triversa.", duties: ["Identitas visual", "Konsep storyboard", "Supervisi artistik"], members: ["Head of Creative", "Concept Writer"] },
            { id: 2, name: "Departemen Eksekusi & Produksi Media", icon: "fa-camera-retro", desc: "Ujung tombak produksi.", duties: ["Shooting", "Manajemen alat", "Editing"], members: ["Head of Execution", "Photographer"] },
            { id: 3, name: "Departemen Pemasaran", icon: "fa-bullhorn", desc: "Penggerak bisnis.", duties: ["Strategi Digital", "Analisa Pasar", "Iklan"], members: ["Head of Marketing", "Ads Specialist"] },
            { id: 4, name: "Departemen Sosmed", icon: "fa-users", desc: "Wajah publik.", duties: ["Konten harian", "Engagement", "CS"], members: ["Community Manager", "Content Creator"] },
            { id: 5, name: "Departemen IT", icon: "fa-code", desc: "Tulang punggung digital.", duties: ["Web Dev", "Cyber Security", "Server"], members: ["Head of IT", "Web Dev"] },
            { id: 6, name: "Departemen Data", icon: "fa-database", desc: "Otak strategis.", duties: ["Analisis performa", "Visualisasi data", "Prediksi"], members: ["Head of Data", "Analyst"] },
            { id: 7, name: "Departemen SDM", icon: "fa-user-tie", desc: "Penjaga budaya.", duties: ["Rekrutmen", "Pelatihan", "KPI"], members: ["HR Manager", "Recruiter"] },
            { id: 8, name: "Departemen Keuangan", icon: "fa-file-invoice-dollar", desc: "Stabilitas finansial.", duties: ["Cashflow", "Kontrak", "Laporan"], members: ["Finance Head", "Accountant"] },
            { id: 9, name: "Departemen R&D", icon: "fa-flask", desc: "Laboratorium masa depan.", duties: ["Riset AI/VR", "Eksperimen produk", "Prototipe"], members: ["Head of Innovation", "Researcher"] }
        ],
        activeDept: null
    },

    // INIT
    init: function() {
        this.renderServices();
        this.renderOwners();
        this.renderDepartments();
        this.initBackground();
        this.renderGallery();
        this.renderRatings();
        this.renderStarsInput();
        this.initRatingListener();
        this.renderMissions('id');
        console.log("TRIVERSA FINAL SYSTEM READY");
    },

    // RENDERING FUNCTIONS
    renderServices: function() {
        const container = document.getElementById('services-grid');
        const lang = this.data.currentLang;
        const dict = this.data.translations[lang] || this.data.translations['en'];
        const startText = dict.start_from || "Start from";
        const currency = dict.currency || "IDR";
        const btnText = dict.btn_order || "ORDER";

        container.innerHTML = this.data.services.map(s => `
            <div class="service-card p-6 rounded-2xl flex flex-col justify-between h-full group cursor-pointer" onclick="window.app.openOrder('${s.id}')">
                <div>
                    <div class="flex justify-between items-start mb-6">
                        <div class="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 card-icon transition-transform duration-500">
                            <i class="fas ${s.icon} text-2xl text-indigo-400"></i>
                        </div>
                        <span class="text-[10px] font-bold bg-white/10 px-2 py-1 rounded text-indigo-300 tracking-wider">${s.tag}</span>
                    </div>
                    <h3 class="text-xl font-black text-white mb-3 leading-tight font-display uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-fuchsia-400 transition-colors">${s.name}</h3>
                    <p class="text-xs text-gray-400 mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">${s.desc}</p>
                </div>
                <div class="border-t border-white/10 pt-4">
                    <div class="flex justify-between items-end mb-4">
                        <span class="text-[10px] text-gray-500 uppercase tracking-wider">${startText}</span>
                        <span class="text-lg text-cyan-400 font-bold font-display">${currency} ${s.price}</span>
                    </div>
                    <button class="w-full py-3 bg-white/5 hover:bg-indigo-600 rounded-xl text-xs font-bold text-white border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                        ${btnText} <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>`).join('');
    },

    renderDepartments: function() {
        const container = document.getElementById('departments-grid');
        const lang = this.data.currentLang;
        const dict = this.data.translations[lang] || this.data.translations['en'];
        const viewText = dict.view_team || "View Team";

        container.innerHTML = this.data.departments.map(d => `
            <div onclick="window.app.openDeptModal(${d.id})" class="service-card p-6 rounded-xl cursor-pointer flex flex-col gap-4 group">
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-lg bg-gray-900 border border-white/10 flex items-center justify-center text-cyan-400 text-2xl group-hover:bg-cyan-400 group-hover:text-black transition shadow-lg shrink-0">
                        <i class="fas ${d.icon}"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-white text-lg group-hover:text-cyan-300 transition leading-tight">${d.name}</h4>
                        <p class="text-[10px] text-indigo-400 uppercase tracking-wider mt-1 font-bold">${viewText}</p>
                    </div>
                </div>
                <div class="border-t border-white/5 pt-3 mt-1">
                    <p class="text-xs text-gray-400 line-clamp-2 group-hover:text-gray-300 transition">${d.desc}</p>
                </div>
            </div>
        `).join('');
    },

    renderOwners: function() {
        const container = document.getElementById('owners-grid');
        container.innerHTML = this.data.owners.map(o => `
            <div class="glass-panel p-8 rounded-2xl relative group hover:border-indigo-500/50 transition duration-500 text-center">
                <button onclick="window.app.triggerAuth('owner', ${o.id})" class="absolute top-3 right-3 text-gray-600 hover:text-white transition z-10 bg-black/50 w-8 h-8 rounded-full flex items-center justify-center"><i class="fas fa-camera text-xs"></i></button>
                <div class="relative w-28 h-28 mx-auto mb-5">
                    <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                    <img id="owner-img-${o.id}" src="${o.img}" class="w-28 h-28 rounded-full object-cover relative z-10 border-4 border-gray-900 group-hover:border-white transition">
                </div>
                <h3 class="text-xl font-bold text-white font-display">${o.name}</h3>
                <p class="text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-3">${o.role}</p>
                <div class="bg-white/5 py-2 px-4 rounded-lg inline-block mb-4"><p class="text-[10px] text-gray-400 italic">${o.prev}</p></div>
                <div><a href="https://instagram.com/${o.ig}" target="_blank" class="text-gray-500 hover:text-white text-sm transition"><i class="fab fa-instagram"></i> @${o.ig}</a></div>
            </div>
        `).join('');
    },

    renderMissions: function(lang) {
        const dict = this.data.translations[lang] || this.data.translations['en'];
        const container = document.getElementById('mission-list');
        if (dict.missions) container.innerHTML = dict.missions.map(m => `<li>${m}</li>`).join('');
    },

    setLanguage: function(lang) {
        this.data.currentLang = lang;
        document.getElementById('current-lang-label').innerText = lang.toUpperCase();
        const dict = this.data.translations[lang] || this.data.translations['en'];
        
        for (const [key, value] of Object.entries(dict)) {
            if (key !== 'missions') {
                const els = document.querySelectorAll(`[data-trans="${key}"]`);
                els.forEach(el => el.innerText = value);
            }
        }
        this.renderMissions(lang);
        this.renderServices();
        this.renderDepartments();
    },

    // MODAL & LOGIC FUNCTIONS
    openModal: function(id) { document.getElementById(id).classList.remove('hidden'); document.getElementById(id).classList.add('flex'); },
    closeModal: function(id) { document.getElementById(id).classList.add('hidden'); document.getElementById(id).classList.remove('flex'); },
    
    // DEPT MODAL
    openDeptModal: function(id) {
        this.data.activeDept = this.data.departments.find(d => d.id === id);
        const dept = this.data.activeDept;
        document.getElementById('modal-dept-title').textContent = dept.name;
        document.getElementById('modal-dept-icon').innerHTML = `<i class="fas ${dept.icon}"></i>`;
        document.getElementById('modal-dept-desc').textContent = dept.desc;
        document.getElementById('modal-dept-duties').innerHTML = dept.duties.map(t => `<li class="flex items-start gap-2"><i class="fas fa-check text-indigo-500 mt-0.5 text-xs"></i> <span>${t}</span></li>`).join('');
        this.renderDeptMembers();
        this.openModal('deptModal');
    },
    renderDeptMembers: function() {
        if(!this.data.activeDept) return;
        const container = document.getElementById('modal-dept-members');
        container.innerHTML = this.data.activeDept.members.map((m, i) => `
            <li class="bg-white/5 px-3 py-2 rounded border border-white/5 flex justify-between items-center group hover:bg-white/10 transition">
                <span class="text-xs text-white">${m}</span>
                <button onclick="window.app.removeMember(${i})" class="hidden group-hover:block text-red-400 text-xs"><i class="fas fa-trash"></i></button>
            </li>
        `).join('');
    },

    // AUTH
    triggerAuth: function(action, id = null) { this.data.currentAuthAction = action; this.data.currentAuthId = id; document.getElementById('auth-pass').value = ''; this.openModal('authModal'); },
    verifyAuth: function() { if(document.getElementById('auth-pass').value === this.data.passkey) { this.closeModal('authModal'); this.performAction(); } else alert('Sandi Salah!'); },
    performAction: function() { const act = this.data.currentAuthAction; if(act === 'logo') document.getElementById('logo-upload-input').click(); if(act === 'owner') document.getElementById('owner-upload-input').click(); if(act === 'dept_edit') this.openDeptEdit(); },
    
    // UPLOADS
    handleOwnerUpload: function(input) { if (input.files && input.files[0]) { const reader = new FileReader(); reader.onload = function(e) { document.getElementById(`owner-img-${window.app.data.currentAuthId}`).src = e.target.result; alert("Foto Profil Berhasil Diperbarui!"); }; reader.readAsDataURL(input.files[0]); } },
    handleLogoUpload: function(input) { if (input.files && input.files[0]) { const reader = new FileReader(); reader.onload = function(e) { const container = document.getElementById('logo-img-container'); container.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-contain">`; alert("Logo Brand Berhasil Diperbarui!"); }; reader.readAsDataURL(input.files[0]); } },

    // DEPT EDIT
    openDeptEdit: function() { const dept = this.data.activeDept; const content = document.getElementById('edit-modal-content'); document.getElementById('edit-modal-title').innerText = `Edit ${dept.name}`; content.innerHTML = `<div class="flex gap-2 mb-4"><input id="new-role" class="flex-1 bg-gray-800 p-2 text-white rounded" placeholder="Role Baru"><button onclick="window.app.addMember()" class="bg-green-600 px-3 rounded text-white">+</button></div><p class="text-xs text-gray-400">Klik icon sampah di list tim untuk menghapus.</p>`; this.openModal('editModal'); },
    addMember: function() { const val = document.getElementById('new-role').value; if(val) { this.data.activeDept.members.push(val); this.renderDeptMembers(); this.closeModal('editModal'); } },
    removeMember: function(i) { if(confirm('Hapus anggota ini?')) { this.data.activeDept.members.splice(i, 1); this.renderDeptMembers(); } },

    // ORDER
    openOrder: function(id) { const s = this.data.services.find(x => x.id == id); document.getElementById('order-service-name').innerText = s.name; this.openModal('orderModal'); },
    submitOrder: function(e) { e.preventDefault(); const n = document.getElementById('order-name').value, w = document.getElementById('order-wa').value, d = document.getElementById('order-desc').value, s = document.getElementById('order-service-name').innerText; const msg = `*ORDER TRIVERSA*%0A*Layanan:* ${s}%0A*Nama:* ${n}%0A*WA:* ${w}%0A*Detail:* ${d}`; window.open(`https://wa.me/${this.data.wa}?text=${msg}`, '_blank'); this.closeModal('orderModal'); },
    sendWA: function(type) { let msg = type === 'recruitment' ? "Halo, saya ingin melamar kerja." : "Halo, saya ingin konsultasi."; window.open(`https://wa.me/${this.data.wa}?text=${encodeURIComponent(msg)}`, '_blank'); },
    closeDeptDetail: function() { document.getElementById('dept-detail-panel').classList.add('hidden'); }, // Legacy catch

    // COMMUNITY
    renderGallery: function() { const g = JSON.parse(localStorage.getItem('triversa_gallery_v5')||"[]"), c = document.getElementById('gallery-container'); if(g.length===0) {c.innerHTML='<div class="text-gray-500 text-sm p-4 text-center w-full">Galeri Kosong</div>';return;} c.innerHTML=g.map(i=>`<div class="card-snap min-w-[200px] h-[200px] rounded-xl bg-gray-800 overflow-hidden relative group"><img src="${i.img}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"><span class="text-xs text-white">${i.name}</span></div></div>`).join(''); },
    submitMoment: function(e) { e.preventDefault(); const f = document.getElementById('moment-file'); if(f.files[0]) { const r = new FileReader(); r.onload=function(ev){ const n={name:document.getElementById('moment-name').value, caption:document.getElementById('moment-caption').value, img:ev.target.result, date:new Date().toLocaleDateString()}; const g=JSON.parse(localStorage.getItem('triversa_gallery_v5')||"[]"); g.unshift(n); localStorage.setItem('triversa_gallery_v5',JSON.stringify(g)); window.app.renderGallery(); window.app.closeModal('galleryModal'); }; r.readAsDataURL(f.files[0]); } },
    renderRatings: function() { const r = JSON.parse(localStorage.getItem('triversa_ratings_v5')||"[]"), c = document.getElementById('rating-list'); if(r.length===0){c.innerHTML='<div class="text-gray-500 text-sm text-center">Belum ada ulasan.</div>';return;} c.innerHTML=r.map(i=>`<div class="bg-white/5 p-3 rounded border border-white/5 mb-2"><div class="flex justify-between mb-1"><span class="text-xs font-bold text-white">${i.name}</span><span class="text-yellow-400 text-[10px]">${'★'.repeat(i.stars)}</span></div><p class="text-xs text-gray-400">"${i.comment}"</p></div>`).join(''); },
    renderStarsInput: function() { const c=document.getElementById('star-input-container'); let h=''; for(let i=1;i<=5;i++)h+=`<i class="fas fa-star cursor-pointer hover:text-yellow-400 transition" onclick="window.app.setRating(${i})" id="star-${i}"></i>`; c.innerHTML=h; this.setRating(5); },
    setRating: function(v) { document.getElementById('rating-value').value=v; for(let i=1;i<=5;i++){const e=document.getElementById(`star-${i}`);e.classList.toggle('text-yellow-400',i<=v);e.classList.toggle('text-gray-600',i>v);} },
    initRatingListener: function() { document.getElementById('rating-form-modal').addEventListener('submit', function(e){ e.preventDefault(); const n={name:document.getElementById('rating-name').value, stars:parseInt(document.getElementById('rating-value').value), comment:document.getElementById('rating-comment').value, date:new Date().toLocaleDateString()}; const r=JSON.parse(localStorage.getItem('triversa_ratings_v5')||"[]"); r.unshift(n); localStorage.setItem('triversa_ratings_v5',JSON.stringify(r)); window.app.renderRatings(); this.reset(); window.app.setRating(5); window.app.closeModal('ratingModal'); }); },

    // ANIMATION
    initBackground: function() {
        const canvas = document.getElementById('nexusCanvas');
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];
        let mouse = { x: null, y: null };

        const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * w; this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? '#818cf8' : '#e879f9'; 
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if(this.x < 0) this.x = w; if(this.x > w) this.x = 0;
                if(this.y < 0) this.y = h; if(this.y > h) this.y = 0;

                if (mouse.x != null) {
                    let dx = mouse.x - this.x; let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    if (distance < 150) {
                        const force = (150 - distance) / 150;
                        this.x -= (dx / distance) * force * 0.5;
                        this.y -= (dy / distance) * force * 0.5;
                    }
                }
            }
            draw() {
                ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color; ctx.shadowBlur = 10; ctx.shadowColor = this.color; ctx.fill(); ctx.shadowBlur = 0;
            }
        }
        for(let i=0; i<80; i++) particles.push(new Particle());

        const animate = () => {
            ctx.fillStyle = 'rgba(5, 5, 16, 0.2)'; // Semi-transparent to clear trails, matching --bg-dark
            ctx.fillRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            particles.forEach((p1, i) => {
                for (let j = i; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p1.x - p2.x; const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 120) {
                        ctx.beginPath(); ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist/120})`; 
                        ctx.lineWidth = 0.8; ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        };
        animate();
    }
};

// Auto-Initialize on Load (Best Practice Replacement for body onload)
window.addEventListener('load', () => {
    if (window.app && window.app.init) {
        window.app.init();
    }
});