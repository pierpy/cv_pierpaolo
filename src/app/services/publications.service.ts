import { Injectable, signal } from '@angular/core';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})

export class PublicationsService {
  // simuliamo un fetch: in produzione puoi leggere un JSON o chiamare un’API
  private readonly data: Publication[] = [
    {
      "title": "Sensory-motor modulations of eeg event-related potentials reflect walking-related macro-affordances",
      "year": 2021,
      "doi": "10.3390/brainsci11111506",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85119703415&doi=10.3390%2fbrainsci11111506&partnerID=40&md5=3dc16fb055b68fd07fa6a96b801037a0"
    },
    {

      "title": "Prognostic Value of EEG Microstates in Acute Stroke",
      "year": 2017,
      "doi": "10.3390/brainsci11111506",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85019770370&doi=10.1007%2fs10548-017-0572-0&partnerID=40&md5=98115d814ed919a5e97438c1df723d7c",
    },
    {

      "title": "Radiomics-based machine learning differentiates “ground-glass” opacities due to COVID-19 from acute non-COVID-19 lung disease",
      "year": 2021,
      "doi": "10.1038/s41598-021-96755-0",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85113513958&doi=10.1038%2fs41598-021-96755-0&partnerID=40&md5=6923e4f5ec5fdabef3e6b58bc4499b50"

    },
    {
      "title": "Offline stimulation of human parietal cortex differently affects resting EEG microstates",
      "year": 2018,
      "doi": "10.1038/s41598-018-19698-z",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85040817788&doi=10.1038%2fs41598-018-19698-z&partnerID=40&md5=d2e379d01933d072b072a3075507ec0e"

    },
    {      
      "title": "Hilbert spectral analysis of EEG data reveals spectral dynamics associated with microstates",
      "year": 2019,
      "doi": "10.1016/j.jneumeth.2019.108317",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069717880&doi=10.1016%2fj.jneumeth.2019.108317&partnerID=40&md5=5cc7f8997d032bb63321bc1382363b8f"
    },
    {

      "title": "Machine learning for predicting levetiracetam treatment response in temporal lobe epilepsy",
      "year": 2021,
      "doi": "10.1016/j.clinph.2021.08.024",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85117945666&doi=10.1016%2fj.clinph.2021.08.024&partnerID=40&md5=030e0c927dd4a92c1f499557016c991b",

    },
    {
 
      "title": "Is Brain Dynamics Preserved in the EEG After Automated Artifact Removal? A Validation of the Fingerprint Method and the Automatic Removal of Cardiac Interference Approach Based on Microstate Analysis",
      "year": 2021,
      "doi": "10.3389/fnins.2020.577160",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85100053648&doi=10.3389%2ffnins.2020.577160&partnerID=40&md5=87b7495da45ee5a75ea5db1047035d93"

    },
    {

      "title": "Exploiting neurovascular coupling: A Bayesian sequential Monte Carlo approach applied to simulated EEG fNIRS data",
      "year": 2017,
      "doi": "10.1088/1741-2552/aa7321",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85028543100&doi=10.1088%2f1741-2552%2faa7321&partnerID=40&md5=b79310ec04b5df7b7aedbf6f0e4c41ae"

    },
    {

      "title": "EEG microstates associated with intra- and inter-subject alpha variability",
      "year": 2020,
      "doi": "10.1038/s41598-020-58787-w",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85079337649&doi=10.1038%2fs41598-020-58787-w&partnerID=40&md5=68093466af8884fab8f6b36c65d765a6"

    },
    {
      "title": "Transcutaneous vagus nerve stimulation modulates eeg microstates and delta activity in healthy subjects",
      "year": 2020,
      "doi": "10.3390/brainsci10100668",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85091502748&doi=10.3390%2fbrainsci10100668&partnerID=40&md5=05f4a433edb9386321571d9616571de5"
    },
    {

      "title": "MRI-based clinical-radiomics model predicts tumor response before treatment in locally advanced rectal cancer",
      "year": 2021,
      "doi": "10.1038/s41598-021-84816-3",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85102678521&doi=10.1038%2fs41598-021-84816-3&partnerID=40&md5=dc3ed8243cf6a57dc019456c26c88a7b"
    },
    {

      "title": "Pre-stimulus EEG Microstates Correlate With Anticipatory Alpha Desynchronization",
      "year": 2020,
      "doi": "10.3389/fnhum.2020.00182",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85086502117&doi=10.3389%2ffnhum.2020.00182&partnerID=40&md5=2dcbce238e0faad2c97a729bab138d9f"
    },
    {
 
      "title": "A Class-Imbalance Aware and Explainable Spatio-Temporal Graph Attention Network for Neonatal Seizure Detection",
      "year": 2023,
      "doi": "10.1142/S0129065723500466",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85167571885&doi=10.1142%2fS0129065723500466&partnerID=40&md5=5e04be7b4197f09c1d11a10ba27bc786",
    },
    {
      "title": "Automated detection and removal of cardiac and pulse interferences from neonatal eeg signals",
      "year": 2021,
      "doi": "10.3390/s21196364",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85115398403&doi=10.3390%2fs21196364&partnerID=40&md5=730be0ab868de87cccee30fa663de294"
    },
    {
      "title": "Modifications of Microstates in Resting-State EEG Associated to Cognitive Decline in Early Alzheimer’s Disease Assessed by a Machine Learning Approach",
      "year": 2024,
      "doi": "10.1007/978-3-031-62520-6_32",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85203604421&doi=10.1007%2f978-3-031-62520-6_32&partnerID=40&md5=6c4d78697ef5a6c4287465b79e87de07"
    },
    {
      "title": "Evidence of neurovascular un-coupling in mild alzheimer’s disease through multimodal eeg-fnirs and multivariate analysis of resting-state data",
      "year": 2021,
      "doi": "10.3390/biomedicines9040337",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85104011438&doi=10.3390%2fbiomedicines9040337&partnerID=40&md5=219b15918bef7481f597b5a7d282814f"
    },
    {
      "title": "Magnetic stimulation selectively affects pre-stimulus EEG microstates",
      "year": 2018,
      "doi": "10.1016/j.neuroimage.2018.04.061",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046798565&doi=10.1016%2fj.neuroimage.2018.04.061&partnerID=40&md5=65f165f5509f5efc0a6e7261e8110b37"
    },
    {

      "title": "EEG microstates distinguish between cognitive components of fluid reasoning",
      "year": 2019,
      "doi": "10.1016/j.neuroimage.2019.01.067",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85060916508&doi=10.1016%2fj.neuroimage.2019.01.067&partnerID=40&md5=893174b614df9b6d2d2a5a5e0ad48c3f"
    },
    {
      "title": "Shared spectral fingerprints of temporal memory precision and representation of the temporal structure of complex narratives",
      "year": 2025,
      "doi": "10.1016/j.isci.2025.112132",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-86000549036&doi=10.1016%2fj.isci.2025.112132&partnerID=40&md5=a2ea0a69d80c9cf83d366f6bed43489f"
    },
    {
      "title": "Fatigue relief in multiple sclerosis by personalized neuromodulation: A multicenter pilot study [FaremusGE]",
      "year": 2025,
      "doi": "10.1016/j.msard.2025.106276",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85215438141&doi=10.1016%2fj.msard.2025.106276&partnerID=40&md5=c75666799dd4deda78f2815b1c3acd4c"
    },
    {
      "title": "Mindfulness meditation styles differently modulate source-level MEG microstate dynamics and complexity",
      "year": 2024,
      "doi": "10.3389/fnins.2024.1295615",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85185107126&doi=10.3389%2ffnins.2024.1295615&partnerID=40&md5=b53b5a815dfa08c5b96474edb143475b"
    },
    {
      "title": "Autonomic impairment in Alzheimer's disease is revealed by complexity analysis of functional thermal imaging signals during cognitive tasks",
      "year": 2019,
      "doi": "10.1088/1361-6579/ab057d",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85063690637&doi=10.1088%2f1361-6579%2fab057d&partnerID=40&md5=770e53ba31c872b0908159c8d1f4e23a"
    },
    {
      "title": "Circadian rhythms in fractal features of EEG signals",
      "year": 2018,
      "doi": "10.3389/fphys.2018.01567",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85057046203&doi=10.3389%2ffphys.2018.01567&partnerID=40&md5=708e881f4d8d8c659bb573bcbdae8557"
    },
    {
      "title": "Euthymic bipolar disorder patients and EEG microstates: a neural signature of their abnormal self experience?",
      "year": 2020,
      "doi": "10.1016/j.jad.2020.03.175",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85084294341&doi=10.1016%2fj.jad.2020.03.175&partnerID=40&md5=6f1c5453eb729052abd1873af6b0da41"
    },
    {
      "title": "Normal Aging: Alterations in Scalp EEG Using Broadband and Band-Resolved Topographic Maps",
      "year": 2020,
      "doi": "10.3389/fphy.2020.00082",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85083521312&doi=10.3389%2ffphy.2020.00082&partnerID=40&md5=8beefb6bc204071a443042ccd9031d9f"
    },
    {
      "title": "Deep Convolutional Neural Networks for Feature-Less Automatic Classification of Independent Components in Multi-Channel Electrophysiological Brain Recordings",
      "year": 2019,
      "doi": "10.1109/TBME.2018.2889512",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85058996815&doi=10.1109%2fTBME.2018.2889512&partnerID=40&md5=d89afaf5493374acda0660e10addd948"
    },
    {
      "title": "EEG-fMRI Bayesian framework for neural activity estimation: A simulation study",
      "year": 2016,
      "doi": "10.1088/1741-2560/13/6/066017",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85002131975&doi=10.1088%2f1741-2560%2f13%2f6%2f066017&partnerID=40&md5=5488a4b629b444b8282fd844d6289fa1"
    },
    {
      "title": "MRI-Based Radiomics Approach Predicts Tumor Recurrence in ER + /HER2 − Early Breast Cancer Patients",
      "year": 2023, 
      "doi": "10.1007/s10278-023-00781-5",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85146892289&doi=10.1007%2fs10278-023-00781-5&partnerID=40&md5=6fa15ceb19d253c4ae0a811d8fa85f25"
    },
    {
      "title": "A graph convolutional neural network for the automated detection of seizures in the neonatal EEG",
      "year": 2022,
      "doi": "10.1016/j.cmpb.2022.106950",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85132212808&doi=10.1016%2fj.cmpb.2022.106950&partnerID=40&md5=84bf486dc6e3b797bdac733edea6c61e"
    },
    {
      "title": "Fiberless, multi-channel fNIRS-EEG system based on silicon photomultipliers: Towards sensitive and ecological mapping of brain activity and neurovascular coupling",
      "year": 2020,
      "doi": "10.3390/s20102831",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85084961942&doi=10.3390%2fs20102831&partnerID=40&md5=c057f7262ede6cfe1ffb14e58da83a48"
    },
    {
      "title": "Brain dynamics of visual anticipation during spatial occlusion tasks in expert tennis players",
      "year": 2023,
      "doi": "10.1016/j.psychsport.2022.102335",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85143355987&doi=10.1016%2fj.psychsport.2022.102335&partnerID=40&md5=2ee05c3de81983c9626510e1cb4ed9dc"
    },
    {
      "title": "EEG-Meta-Microstates: Towards a More Objective Use of Resting-State EEG Microstate Findings Across Studies",
      "year": 2024,
      "doi": "10.1007/s10548-023-00993-6",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85166273643&doi=10.1007%2fs10548-023-00993-6&partnerID=40&md5=589320a43e7a69a2ef6db368cfa34a6f"
    },
    {
      "title": "Exploring brain activity for positive and negative emotions by means of EEG microstates",
      "year": 2022,
      "doi": "10.1038/s41598-022-07403-0",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85125575052&doi=10.1038%2fs41598-022-07403-0&partnerID=40&md5=0b0912a74979a67a7a7d12a4caf6828e"
    },
    {
      "title": "Levetiracetam Modulates EEG Microstates in Temporal Lobe Epilepsy",
      "year": 2022,
      "doi": "10.1007/s10548-022-00911-2",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85138163815&doi=10.1007%2fs10548-022-00911-2&partnerID=40&md5=3d3253f7a93424ec1bb1b41f13e9f90e"
    },
    {
      "title": "Brain electrical microstate features as biomarkers of a stable motor output",
      "year": 2022,
      "doi": "10.1088/1741-2552/ac975b",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85140855311&doi=10.1088%2f1741-2552%2fac975b&partnerID=40&md5=7d26f6ce5fdc97fc6e23ccce33f42ec2"
    },
    {
 
      "title": "Inhibitory control in Bipolar Disorder disclosed by theta band modulation",
      "year": 2025,
      "doi": "10.1016/j.jad.2025.03.027",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-86000144481&doi=10.1016%2fj.jad.2025.03.027&partnerID=40&md5=547f8e36891c9c8299207d484a1a0d34"
    },
    {
      "title": "rTMS affects EEG microstates dynamic during evoked activity",
      "year": 2021,
      "doi": "10.1016/j.cortex.2021.02.014",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85103083486&doi=10.1016%2fj.cortex.2021.02.014&partnerID=40&md5=3f16660ae51097d46f5d97efffcebd15"
    },
    {
      "title": "Working memory decline in Alzheimer’s disease is detected by complexity analysis of multimodal EEG-fnirs",
      "year": 2020,
      "doi": "10.3390/e22121380",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85097377178&doi=10.3390%2fe22121380&partnerID=40&md5=0e3ff8df423ea92a823f03089229ece1"
    },
    {
      "title": "Yield of EEG features as markers of disease severity in amyotrophic lateral sclerosis: a pilot study",
      "year": 2023,
      "doi": "10.1080/21678421.2022.2152696",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85144277864&doi=10.1080%2f21678421.2022.2152696&partnerID=40&md5=52856877e5cb9855994479379eef2bfa"
    },
    {
      "title": "Microstate Analysis Reflects Maturation of the Preterm Brain",
      "year": 2024,
      "doi": "10.1007/s10548-023-01008-0",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85174042126&doi=10.1007%2fs10548-023-01008-0&partnerID=40&md5=e95c67efd6c9b42a84e46a598b9e2e73"
    },
    {
      "title": "Deep learning for hybrid EEG-fNIRS brain-computer interface: Application to motor imagery classification",
      "year": 2018,
      "doi": "10.1088/1741-2552/aaaf82",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85047493830&doi=10.1088%2f1741-2552%2faaaf82&partnerID=40&md5=ad32f7a560f2a7b3418bc08c89506a2f"
    },
    {
      "title": "Inhibition of return in time-lapse: Brain Rhythms during grip force control for spatial attention",
      "year": 2021,
      "doi": "10.1016/j.neuropsychologia.2021.108068",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85118358798&doi=10.1016%2fj.neuropsychologia.2021.108068&partnerID=40&md5=44751b842185019afd5d4a5c3a2e3c07"
    },
    {
      "title": "Predictive role of exteroceptive and interoceptive bodily dimensions to schizotypal personality traits",
      "year": 2025,
      "doi": "10.1038/s41598-025-89951-9",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-86000279686&doi=10.1038%2fs41598-025-89951-9&partnerID=40&md5=52c64ae1853440e236e8b128e09a6d91"
    },
    {
      "title": "Characterization of the Functional Dynamics in the Neonatal Brain during REM and NREM Sleep States by means of Microstate Analysis",
      "year": 2021,
      "doi": "10.1007/s10548-021-00861-1",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85109964617&doi=10.1007%2fs10548-021-00861-1&partnerID=40&md5=26a0b5938a7109dd20e84f00a82e4e71"
    },
    {
      "title": "Electroencephalography-Derived Prognosis of Functional Recovery in Acute Stroke through Machine Learning Approaches",
      "year": 2020,
      "doi": "10.1142/S0129065720500677",
      "url": "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85094193667&doi=10.1142%2fS0129065720500677&partnerID=40&md5=85ffe15b92ac3ddc31203b81d5216711"
    }
  ];

  private readonly _pubs = signal<Publication[]>(this.data);
  readonly pubs = this._pubs.asReadonly();
}
