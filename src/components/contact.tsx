
import { useState } from "react";
import { 
  Mail, 
  User, 
  IdCard, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Send,
  ArrowLeft,
  Loader
} from "lucide-react";
import emailjs from '@emailjs/browser';

// Utilisation des variables d'environnement
const VITE_EmailJS_KEY = import.meta.env.VITE_EmailJS_KEY;
const VITE_templateEmail = import.meta.env.VITE_templateEmail;
const VITE_serviceEmailJS= import.meta.env.VITE_serviceEmailJS;

// Initialiser EmailJS (remplacez ces valeurs par les vôtres)
emailjs.init(VITE_EmailJS_KEY ); // Clé publique d'EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Effacer les erreurs lorsque l'utilisateur modifie le formulaire
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Envoyer le formulaire via EmailJS
      await emailjs.send(
        VITE_serviceEmailJS,     // Remplacez par votre ID de service
        VITE_templateEmail,    // Remplacez par votre ID de template
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phonefixe: formData.tel,
          message: formData.message,
          to_name: "Votre nom" // Remplacez par le nom du destinataire
        },
        'Onspp_37nEvG5mnv3'      // Remplacez par votre clé publique
      );
      
      setSubmitted(true);
    } catch (err) {
      console.error("Erreur lors de l'envoi du formulaire:", err);
      setError("Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
    });
    setSubmitted(false);
    setError(null);
  };

  if (submitted) {
    return (
      <div className=" min-h-screen flex items-center justify-center p-4">
        <div className="contact-container bg-gray-900 text-white rounded-xl w-full max-w-4xl overflow-hidden">
          <div className="p-8 text-center success-message">
            <div className="bg-emerald-500/10 p-6 rounded-xl">
              <CheckCircle className="mx-auto text-5xl text-emerald-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Merci pour votre message!</h2>
              <p className="text-gray-300">Nous vous répondrons dans les plus brefs délais.</p>
              <button
                onClick={resetForm}
                className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm font-medium transition duration-200 flex items-center mx-auto"
              >
                <ArrowLeft className="mr-2" size={16} />
                Envoyer un autre message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4  overflow-hidden">
      {/* Animation containers */}


      <div className="relative contact-container bg-gray-900 text-white rounded-xl w-full max-w-4xl overflow-hidden z-10">
        <div className="p-6 md:p-8 relative z-20 bg-gray-900 rounded-xl">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex items-center mb-8">
              <Mail className="text-2xl mr-3 text-emerald-400" />
              <h1 className="text-2xl md:text-3xl font-bold border-b-2 border-emerald-400 pb-2">
                Contactez-moi
              </h1>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-500/20 border border-red-500 rounded-md text-red-300 text-sm">
                {error}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="form-group">
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-300">
                    Prénoms
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input-field w-full pl-10 pr-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-emerald-400 outline-none rounded-t-md transition duration-200 focus:shadow-[0_4px_6px_rgba(74,222,128,0.3)]"
                      placeholder="Votre Prénoms"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-gray-300">
                    Nom
                  </label>
                  <div className="relative">
                    <IdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input-field w-full pl-10 pr-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-emerald-400 outline-none rounded-t-md transition duration-200 focus:shadow-[0_4px_6px_rgba(74,222,128,0.3)]"
                      placeholder="Votre Nom"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field w-full pl-10 pr-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-emerald-400 outline-none rounded-t-md transition duration-200 focus:shadow-[0_4px_6px_rgba(74,222,128,0.3)]"
                      placeholder="Votre email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tel" className="block text-sm font-medium mb-1 text-gray-300">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      id="tel"
                      name="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      required
                      className="input-field w-full pl-10 pr-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-emerald-400 outline-none rounded-t-md transition duration-200 focus:shadow-[0_4px_6px_rgba(74,222,128,0.3)]"
                      placeholder="Votre Téléphone"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="form-group h-full">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">
                    Message
                  </label>
                  <div className="relative h-full">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="input-field w-full pl-10 pr-4 py-2 bg-gray-800 border-2 border-gray-600 focus:border-emerald-400 outline-none rounded-md transition duration-200 h-full focus:shadow-[0_4px_6px_rgba(74,222,128,0.3)]"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="submit-btn px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-400/40 active:translate-y-0 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" size={18} />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style tsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-rotate {
          animation: rotate 7s linear infinite;
        }
        
        .animation-delay-3s {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
};

export default Contact;