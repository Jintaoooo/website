document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { event.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

const languageToggle = document.querySelector('.language-toggle');
languageToggle?.addEventListener('click', () => {
  const chinese = document.documentElement.classList.toggle('chinese');
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  languageToggle.innerHTML = chinese ? '<span class="active-label">中</span> / <span>EN</span>' : '<span>中</span> / <span class="active-label">EN</span>';
});

const paperData = [
['2026','Early Permian deltaic systems and weathering differentiation in the southwestern Yangtze Block','华南西南部早二叠世三角洲体系与风化分异','Deng, Xusheng, Jintao Zhou, Wenchao Yu, Yuansheng Du, Shengyuan Ji, and Ruiqin Lin. (2026/01/12). Early Permian deltaic systems and weathering differentiation in the southwestern Yangtze Block, South China: Constraints from detrital zircon geochronology and paleogeography reconstruction. <em>Journal of Asian Earth Sciences</em>, article 106970. Publisher: Pergamon.'],
['2025','Revisiting the provenance and formation environments of Quaternary bauxite in South China','华南第四纪铝土矿物源与形成环境再认识','Yu, Wenchao, Tianyi Shen, Wei Wei, Shangyu Guo, Jintao Zhou, Long Chen, Xing Zhen, Hongcheng Mo, Yuanhong Li, Xinnian Li, Thomas J. Algeo, and Yuansheng Du. (2025/11/28). Revisiting the provenance and formation environments of Quaternary bauxite in South China and significance for ancient karstic bauxite deposits. <em>Earth-Science Reviews</em>, article 105345. Publisher: Elsevier.'],
['2025','Geochemical constraints on critical metals in the Jajarm bauxite deposit','Jajarm 铝土矿床关键金属的地球化学约束','Khosravi, Maryam, Wenchao Yu, Ali Abedini, and Jintao Zhou. (2025/07/12). Geochemical constraints on critical metals in the Jajarm bauxite deposit in Northeastern Iran. <em>Scientific Reports</em>, 15(1), 25256. Publisher: Nature Publishing Group UK.'],
['2025','Provenance of the Late Triassic–Early Jurassic Gano bauxite deposit','晚三叠世—早侏罗世 Gano 铝土矿床的物源','Zhou, Jintao, Maryam Khosravi, Wenchao Yu, Guangyan Zhou, and Hao Deng. (2025/08/08). Provenance of the late Triassic–early Jurassic Gano bauxite deposit in Alborz Orogen, Northern Iran: A multi-proxy geochronological approach by detrital zircon and rutile. <em>Lithos</em>, article 108219. Publisher: Elsevier.'],
['2025','Occurrence forms of rare earth elements in Chinese alumina-bearing rock series','中国含铝岩系中稀土元素的赋存形式','Zhou, Jintao, Wenchao Yu, Yuansheng Du, Xusheng Deng, Shenfu Weng, and Zhiyuan Lei. (2025/01). Occurrence forms of rare earth elements in Chinese alumina-bearing rock series: Ensemble machine learning analysis driven by major element data. <em>Journal of Palaeogeography (Chinese Edition)</em>, 27(2), 1–14.'],
['2023','Geochemistry of rare earth elements of the Gano bauxite deposit','Gano 铝土矿床稀土元素地球化学','Khosravi, Maryam, Wenchao Yu, and Jintao Zhou. (2023/09/23). Geochemistry of rare earth elements of the Gano bauxite deposit, eastern Alborz zone, northern Iran. <em>Scientific Quarterly Journal of Geosciences</em>, 33(3), 183–200. Publisher: Geological Survey of Iran.'],
['2023','Bauxite provenance and tectonic evolution in the Tethys','特提斯域铝土矿物源与构造演化','Zhou, Jintao, Wenchao Yu, Wei Wei, Mingyu Yang, and Yuansheng Du. (2023/06). Provenance and tectonic evolution of bauxite deposits in the Tethys: Perspective from random forest and logistic regression analyses. <em>Geochemistry, Geophysics, Geosystems</em>, 24(6), e2022GC010745.'],
['2023','Provenance and deep-time environmental factors for bauxitization in China','中国铝土矿化的物源与深时环境因素','Yu, Wenchao, Yuansheng Du, Jintao Zhou, Lihua Cheng, Xusheng Deng, Xia Dai, Dawei Pang, Shenfu Weng, Zhiyuan Lei, Pengguang Li, and Qun Chen. (2023). Provenance and deep-time environmental factors for bauxitization in China: Progress and discussion. <em>Acta Geologica Sinica</em>, 97(09), 3056–3074.'],
['2023','U–Pb detrital zircon ages and Hf isotope from Sardinia and Adria Cretaceous bauxite','撒丁岛与亚得里亚白垩纪铝土矿碎屑锆石 U–Pb 年龄与 Hf 同位素','Yu, Wenchao, Giacomo Oggiano, Giovanni Mongelli, Jintao Zhou, Roberto Buccione, Lingtong Xu, Paola Mameli, and Yuansheng Du. (2023/02/01). U–Pb detrital zircon ages and Hf isotope from Sardinia and Adria Cretaceous bauxite (Italy): Constraints on the Alpine Tethys paleogeography and tectonic evolution. <em>Ore Geology Reviews</em>, 153, 105272. Publisher: Elsevier.'],
['2023','Continental weathering and Early Carboniferous bauxite deposits in South China','大陆风化与华南早石炭世铝土矿床的形成','Pang, Dawei, Wenchao Yu, Qun Chen, Yuansheng Du, Xiaoyan Dai, Guolin Xiong, Keyong Deng, Bo Wu, Xusheng Deng, and Jintao Zhou. (2023/10/15). Continental weathering led to the accumulation of Early Carboniferous bauxite deposits in the SW South China Craton. <em>Journal of Asian Earth Sciences</em>, 256, 105801. Publisher: Pergamon.'],
['2022','Provenance change and continental weathering in Guizhou','贵州晚二叠世铝质黏土岩的物源变化与大陆风化','Zhou, Jintao, Wenchao Yu, Yuansheng Du, Xu Liu, Yuhang Wang, Guolin Xiong, Ziyuan Zhao, Dawei Pang, Daxing Shen, Shenfu Weng, Zhichen Liu, and Deng Chen. (2022/05/01). Provenance change and continental weathering of Late Permian bauxitic claystone in Guizhou Province, Southwest China. <em>Journal of Geochemical Exploration</em>, 236, 106962. Publisher: Elsevier.'],
['2021','Provenance of lower Carboniferous bauxite deposits in northern Guizhou','贵州北部下石炭统铝土矿床的物源','Xiong, Guolin, Wenchao Yu, Yuansheng Du, Shenfu Weng, Dawei Pang, Xusheng Deng, and Jintao Zhou. (2021/02). Provenance of lower Carboniferous bauxite deposits in northern Guizhou, China: Constraints from geochemistry and detrital zircon U–Pb ages. <em>Journal of Earth Science</em>, 32(1), 235–252. Publisher: China University of Geosciences.'],
['2024','Geochemical constraints on the Gano karst bauxite deposit','Gano 喀斯特铝土矿床的地球化学约束','Khosravi, Maryam, Wenchao Yu, Ali Abedini, and Jintao Zhou. (2024/07/01). Geochemical constraints on the Gano karst bauxite deposit, eastern Alborz Mountains, northern Iran: Implications for provenance, elemental mobility, and distribution of elements. <em>Journal of Geochemical Exploration</em>, 262, 107468. Publisher: Elsevier.']
];

const firstAuthorTitles = new Set(['Provenance of the Late Triassic–Early Jurassic Gano bauxite deposit','Occurrence forms of rare earth elements in Chinese alumina-bearing rock series','Bauxite provenance and tectonic evolution in the Tethys','Provenance change and continental weathering in Guizhou']);
const correspondingAuthors = {
  'Early Permian deltaic systems and weathering differentiation in the southwestern Yangtze Block':['Jintao Zhou','Wenchao Yu'],
  'Geochemical constraints on critical metals in the Jajarm bauxite deposit':['Maryam Khosravi'],
  'Geochemistry of rare earth elements of the Gano bauxite deposit':['Maryam Khosravi'],
  'Continental weathering and Early Carboniferous bauxite deposits in South China':['Wenchao Yu','Yuansheng Du']
};
paperData.forEach(([year,title])=>{if(!correspondingAuthors[title])correspondingAuthors[title]=['Wenchao Yu'];});
paperData.sort((a,b)=>Number(firstAuthorTitles.has(b[1])||correspondingAuthors[b[1]].includes('Jintao Zhou'))-Number(firstAuthorTitles.has(a[1])||correspondingAuthors[a[1]].includes('Jintao Zhou')));
const publicationList=document.querySelector('.publication-list');
if(publicationList){publicationList.innerHTML=paperData.map(([year,title,titleZh,citation],index)=>{
  const firstAuthor=firstAuthorTitles.has(title), corresponding=correspondingAuthors[title], userCorresponding=corresponding.includes('Jintao Zhou');
  const roles=[firstAuthor?'FIRST AUTHOR · 一作':'',userCorresponding?'CORRESPONDING AUTHOR · 通讯':''].filter(Boolean);
  const highlightedCitation=citation.replaceAll('Jintao Zhou','<strong><u>Jintao Zhou</u></strong>').replaceAll('Zhou, Jintao','<strong><u>Zhou, Jintao</u></strong>');
  return '<details class="publication-item"'+(index===0?' open':'')+'><summary><span class="pub-year">'+year+'</span><span class="pub-title"><span class="pub-role">'+(roles.length?roles.join(' / '):'COLLABORATIVE · 合作')+'</span><span class="lang-en">'+title+'</span><span class="lang-zh">'+titleZh+'</span></span><span class="pub-arrow">↘</span></summary><div class="pub-detail"><p>'+highlightedCitation+'</p><p class="corresponding-note"><strong>Corresponding author(s) · 通讯作者：</strong>'+corresponding.join('; ')+'</p></div></details>';
}).join('');}
