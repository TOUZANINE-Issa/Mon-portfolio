import { Mail, Phone, MapPin, Car, Code, Database, Server, GitBranch, Languages, GraduationCap, Briefcase, FolderKanban, Heart, ExternalLink, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
            Issa TOUZANINE
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 font-light">
            Étudiant BTS SIO option SLAM
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </header>

        {/* Veille Technologique */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Veille Technologique</h2>
          </div>

          <p className="text-lg font-semibold text-slate-700 mb-6">
            Cloud computing et microservices (Docker, Kubernetes, sécurité des conteneurs)
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">IB Formation</h3>
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                Présente les défis de sécurité liés aux conteneurs et Kubernetes, et les outils pour y répondre.
              </p>
              <a
                href="https://www.ib-formation.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Consulter l'article <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Hostragons</h3>
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                Explique les bonnes pratiques pour sécuriser Docker et Kubernetes, notamment la gestion des images et des accès.
              </p>
              <a
                href="https://www.hostragons.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Consulter l'article <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 hover:bg-slate-100 transition-colors">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">IT-Connect</h3>
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                Détaille les 5 principaux risques de cybersécurité liés à Docker (images vulnérables, Docker Escape, etc.).
              </p>
              <a
                href="https://www.it-connect.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Consulter l'article <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Compétences Techniques */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">Compétences Techniques</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Code size={20} className="text-blue-600" />
                Langages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'C', 'Java', 'HTML5', 'Python', 'CSS3'].map(lang => (
                  <span key={lang} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Server size={20} className="text-blue-600" />
                IDE
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Suite JetBrains', 'IDLE'].map(ide => (
                  <span key={ide} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                    {ide}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Database size={20} className="text-blue-600" />
                Bases de données
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                  MySQL
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['jQuery', 'Bootstrap', 'JavaFX', 'Symfony'].map(fw => (
                  <span key={fw} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                    {fw}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Server size={20} className="text-blue-600" />
                Réseau
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Apache', 'Debian', 'Windows (NTFS)', 'HyperV', 'VirtualBox'].map(net => (
                  <span key={net} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                    {net}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <GitBranch size={20} className="text-blue-600" />
                Gestion de version
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Suite Office'].map(tool => (
                  <span key={tool} className="bg-white px-3 py-1 rounded-full text-sm text-slate-700 shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compétences Transversales */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Compétences Transversales</h2>
          <div className="flex flex-wrap gap-3">
            {['Organisation', 'Esprit d\'équipe', 'Persévérance', 'Capacité d\'analyse'].map(comp => (
              <span key={comp} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                {comp}
              </span>
            ))}
          </div>
        </section>

        {/* CV / Parcours */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-slate-900">CV / Parcours</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-xl text-blue-600 mb-4 flex items-center gap-2">
                <GraduationCap size={24} />
                Formation
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold text-slate-900">2024</p>
                  <p className="text-slate-700">BTS SIO SLAM</p>
                  <p className="text-sm text-slate-600">Lycée Robert Schuman</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-4">
                  <p className="font-semibold text-slate-900">2023</p>
                  <p className="text-slate-700">BUT GEII</p>
                  <p className="text-sm text-slate-600">IUT Cergy-Pontoise</p>
                </div>
                <div className="border-l-4 border-slate-300 pl-4">
                  <p className="font-semibold text-slate-900">2022</p>
                  <p className="text-slate-700">Bac STI2D SIN</p>
                  <p className="text-sm text-slate-600">Lycée Paul Éluard</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl text-blue-600 mb-4 flex items-center gap-2">
                <Briefcase size={24} />
                Expérience
              </h3>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-slate-900">2025</p>
                <p className="text-slate-700 font-medium">Stage technicien informatique</p>
                <p className="text-sm text-slate-600 mt-2">Installation, support, maintenance</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl text-blue-600 mb-4 flex items-center gap-2">
                <FolderKanban size={24} />
                Projets réalisés
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Jeux en C (Pac-Man, bataille navale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Cardiogramme fonctionnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Jeu en Java</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Participation à la Nuit de l'info</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Centres d'intérêt et Langues */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-slate-900">Centres d'intérêt</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Sports</h3>
                <div className="flex flex-wrap gap-2">
                  {['Vélo', 'Natation', 'Automobile', 'Boxe anglaise', 'Basket-ball', 'Taekwondo'].map(sport => (
                    <span key={sport} className="bg-slate-100 px-3 py-1 rounded-lg text-sm text-slate-700">
                      {sport}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Voyages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Italie', 'Espagne', 'Maroc', 'Belgique'].map(pays => (
                    <span key={pays} className="bg-slate-100 px-3 py-1 rounded-lg text-sm text-slate-700">
                      {pays}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-slate-900">Langues</h2>
            </div>

            <div className="space-y-4">
              {[
                { langue: 'Arabe', niveau: 3 },
                { langue: 'Anglais', niveau: 2 },
                { langue: 'Espagnol', niveau: 1 }
              ].map(({ langue, niveau }) => (
                <div key={langue}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-900">{langue}</span>
                    <span className="text-slate-600">{niveau}/5</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${(niveau / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <MapPin size={24} className="flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Localisation</p>
                <p className="font-semibold">Paris</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Phone size={24} className="flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Téléphone</p>
                <p className="font-semibold">06 44 07 31 90</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Mail size={24} className="flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Email</p>
                <a href="mailto:issatouzanine@gmail.com" className="font-semibold hover:underline">
                  issatouzanine@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
              <Car size={24} className="flex-shrink-0" />
              <div>
                <p className="text-sm opacity-90">Mobilité</p>
                <p className="font-semibold">Permis B</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 text-slate-600">
          <p className="text-sm">© 2025 Issa TOUZANINE - Portfolio</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
