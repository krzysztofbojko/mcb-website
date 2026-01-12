export const clusters = [
  {
    id: "material-engineering",
    title: "Inżynieria Materiałowa i Wytwarzanie",
    description: "Projektowanie materiałów, wytwarzanie stopów i nowoczesne technologie druku 3D.",
    services: [
      {
        id: "1",
        title: "Projektowanie Materiałów",
        offer: [
          "Projektowanie materiałów metalicznych i biomedycznych",
          "Badania procesów umocnienia i odkształcenia stopów metali",
          "Obliczenia termodynamiczne i projektowanie stopów do pracy w wysokich temperaturach",
          "Modelowanie procesów w układach warstwowych"
        ],
        infrastructure: [
          "Pakiety obliczeniowe: VASP, ATAT, Quantum Espresso",
          "Własne zasoby obliczeniowe"
        ],
        contact: "dr inż. Piotr Kwaśniak"
      },
      {
        id: "2",
        title: "Wytwarzanie Stopów Metali",
        offer: [
          "Projektowanie procesów wytwarzania metali i ich stopów",
          "Topienie metali w piecu łukowym w atmosferze argonu",
          "Obróbka cieplna (wyżarzanie, starzenie) i plastyczna (walcowanie na zimno)",
          "Testy oksydacji materiałów"
        ],
        infrastructure: [
          "Piec łukowy Edmund Bühler (temp. do 3500°C)",
          "Piec poziomy jednostrefowy i muflowy",
          "Walcarka elektryczna i nożyce gilotynowe"
        ],
        contact: "dr inż. Karol Golasiński"
      },
      {
        id: "3",
        title: "Wytwarzanie Przyrostowe Metali (Druk 3D)",
        offer: [
          "Projektowanie CAD i optymalizacja geometrii (Siemens NX, ANSYS)",
          "Topienie laserowe w złożu proszku (technologia PBF-LB)",
          "Modyfikacja powierzchni i kontrola jakości wytworzonych obiektów"
        ],
        infrastructure: [
          "Drukarka 3D do metalu Aconity 3D (Aconity mini)",
          "Reometr Anton Paar i analizator cząstek Kamika Mini 3D"
        ],
        contact: "dr inż. Bartłomiej Wysocki"
      },
      {
        id: "5",
        title: "Wytwarzanie Przyrostowe Tworzyw Sztucznych i Ceramiki",
        offer: [
          "Druk 3D metodami FFF/FDM, SLA, CJP oraz SLS",
          "Tworzenie prototypów, części zamiennych, makiet i obiektów medycznych"
        ],
        infrastructure: [
          "Drukarki filamentowe (Prusa, ZMorph, Apium)",
          "Drukarki żywiczne SLA (3D Systems, Formlabs) i proszkowe SLS (Sinterit)"
        ],
        contact: "dr inż. Bartłomiej Wysocki"
      },
      {
        id: "7",
        title: "Preparatyka Metalograficzna",
        offer: [
          "Przygotowanie próbek do badań (cięcie, szlifowanie, polerowanie)",
          "Wykonywanie zdjęć mikrostruktury (mikroskopy świetlne i elektronowe)",
          "Skanowanie 3D przed zniszczeniem próbki"
        ],
        infrastructure: [
          "Drążarka drutowa, piła tarczowa, praska na gorąco, szlifierko-polerka",
          "Mikroskopy Keyence i Nikon"
        ],
        contact: "dr inż. Donata Kuczyńska-Zemła"
      }
    ]
  },
  {
    id: "analysis-control",
    title: "Analiza i Kontrola",
    description: "Zaawansowana charakteryzacja materiałowa, monitorowanie konstrukcji i akwizycja danych.",
    services: [
      {
        id: "8",
        title: "Analiza Struktury i Składu Fazowego",
        offer: [
          "Badanie właściwości metali (tytan, aluminium, miedź, stal)",
          "Mikroskopia elektronowa, tomografia komputerowa i dyfrakcja rentgenowska",
          "Analiza proszków do druku 3D"
        ],
        infrastructure: [
          "Mikrotomograf komputerowy Nikon",
          "Skaningowy mikroskop elektronowy Thermo Fisher Scientific",
          "Dyfraktometr rentgenowski Bruker"
        ],
        contact: "dr inż. Bartłomiej Wysocki"
      },
      {
        id: "9",
        title: "Badania Właściwości Mechanicznych",
        offer: [
          "Testy rozciągania, ściskania i zginania (20-1000°C)",
          "Badania na mikropróbkach i metoda Small Punch Test",
          "Badania nieniszczące (twardość, właściwości materiałowe)"
        ],
        infrastructure: [
          "Maszyna wytrzymałościowa Cometech",
          "System Small Punch Test i przenośny tester twardości"
        ],
        contact: "dr inż. Karol Golasiński, dr inż. Marcin Ciesielski"
      },
      {
        id: "4",
        title: "Monitorowanie Konstrukcji",
        offer: [
          "Długookresowe badanie wpływu warunków na obiekty budowlane",
          "Automatyzacja pomiarów i ciągła kontrola geometryczna obiektów (robotyczna)",
          "Systemy ostrzegania przed przekroczeniem norm"
        ],
        infrastructure: [
          "Tachimetr zrobotyzowany i odbiorniki geodezyjne Trimble",
          "Sieć precyzyjnych pochylomierzy i stacje meteorologiczne"
        ],
        contact: "inż. Krzysztof Bojko, Marcin Sas-Kularych"
      },
      {
        id: "6",
        title: "Akwizycja Danych Dronami",
        offer: [
          "Inwentaryzacja geodezyjna i mapowanie terenu",
          "Monitorowanie środowiska i stanu roślinności",
          "Modele 3D budynków oraz inspekcje wideo"
        ],
        infrastructure: [
          "Dron DJI 300 RTK z kamerami fotogrametrycznymi i multispektralnymi",
          "Oprogramowanie Pix4D i Trimble Business Control"
        ],
        contact: "Wojciech Nowak"
      }
    ]
  },
  {
    id: "digital-tech",
    title: "Technologie Cyfrowe",
    description: "Obliczenia wysokiej wydajności, VR, digitalizacja i informatyka śledcza.",
    services: [
      {
        id: "11",
        title: "Zasoby Obliczeniowe (Klaster CATO)",
        offer: [
          "Wysokowydajne obliczenia i symulacje numeryczne",
          "Bezpieczne magazynowanie danych (3 PB przestrzeni dyskowej)",
          "Obsługa języków: Python, R, Scala, Java"
        ],
        infrastructure: [
          "8 węzłów IBM AC922 z procesorami POWER9 i kartami GPU V100",
          "Klaster aplikacyjny Dell (9 węzłów)"
        ],
        contact: "dr inż. Piotr Kwaśniak, inż. Krzysztof Bojko"
      },
      {
        id: "10",
        title: "Skanowanie 3D, Digitalizacja i VR",
        offer: [
          "Projektowanie środowisk VR i aplikacji promocyjnych/szkoleniowych",
          "Digitalizacja obiektów i skanowanie 3D (od małych detali po budynki)"
        ],
        infrastructure: [
          "Skanery światła strukturalnego (Artec) i laserowe (Leica)",
          "Zestawy VR (HTC Vive, Meta Quest, Varjo Aero)"
        ],
        contact: "Wojciech Nowak"
      },
      {
        id: "12",
        title: "Informatyka Śledcza",
        offer: [
          "Odzyskiwanie danych z dysków, telefonów i pamięci flash",
          "Analiza śledcza i raportowanie z użyciem uczenia maszynowego",
          "Przywracanie celowo usuniętych danych"
        ],
        infrastructure: [
          "Oprogramowanie: Magnet AXIOM, Cellebrite Inspector",
          "Sprzęt: Mediaimager, AceLab PC-3000"
        ],
        contact: "Bogdan Gozdecki"
      }
    ]
  },
  {
    id: "society-environment",
    title: "Społeczeństwo i Środowisko",
    description: "Badania środowiskowe i analizy medioznawcze.",
    services: [
      {
        id: "13",
        title: "Laboratorium Środowiskowe",
        offer: [
          "Oznaczanie substancji toksycznych i biologicznych",
          "Identyfikacja metabolitów i alergenów",
          "Analizy biochemiczne i hematologiczne"
        ],
        infrastructure: [
          "Analizatory białka i tłuszczu (Soxtec, Kjeltec)",
          "Analizator CHNSO Thermo Scientific"
        ],
        contact: "mgr Maciej Sierakowski"
      },
      {
        id: "14",
        title: "Medioznawstwo",
        offer: [
          "Monitorowanie mediów społecznościowych i portali informacyjnych",
          "Badanie \"fake news\" i trendów",
          "Badania UX i eyetracking (śledzenie wzroku)"
        ],
        infrastructure: [
          "Aula audiowizualna, kamery 4K Sony",
          "Eyetracker Tobii"
        ],
        contact: "dr Marek Robak"
      }
    ]
  }
];

export const experts = [
  { name: "dr inż. Piotr Kwaśniak", role: "Ekspert - Projektowanie Materiałów, HPC", email: "p.kwasniak@uksw.edu.pl" },
  { name: "dr inż. Karol Golasiński", role: "Ekspert - Wytwarzanie Stopów, Badania Mechaniczne", email: "k.golasinski@uksw.edu.pl" },
  { name: "dr inż. Bartłomiej Wysocki", role: "Ekspert - Druk 3D, Analiza Struktury", email: "b.wysocki@uksw.edu.pl" },
  { name: "inż. Krzysztof Bojko", role: "Specjalista - Monitorowanie, HPC", email: "k.bojko@uksw.edu.pl" },
  { name: "Marcin Sas-Kularych", role: "Specjalista - Monitorowanie, HPC, ICT", email: "m.sas@uksw.edu.pl" },
  { name: "Wojciech Nowak", role: "Specjalista - Drony, VR, Skanowanie 3D", email: "w.nowak@uksw.edu.pl" },
  { name: "dr inż. Donata Kuczyńska-Zemła", role: "Ekspert - Preparatyka Metalograficzna", email: "d.kuczynska@uksw.edu.pl" },
  { name: "prof. ucz. dr hab. Mirosław Kurkowski", role: "Ekspert - Informatyka Śledcza", email: "m.kurkowski@uksw.edu.pl" },
  { name: "mgr Maciej Sierakowski", role: "Ekspert - Laboratorium Środowiskowe", email: "m.sierakowski@uksw.edu.pl" },
  { name: "dr Marek Robak", role: "Ekspert - Medioznawstwo", email: "m.robak@uksw.edu.pl" }
];

export const generalInfo = {
    address: "ul. Marii Konopnickiej 1, 05-092 Dziekanów Leśny",
    email: "mcb@uksw.edu.pl",
    partners: ["KGHM", "PGE", "Termocent", "Geocom"]
};
