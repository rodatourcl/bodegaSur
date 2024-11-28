// Definir las traducciones en inglés y español
const translationsEn = {
    //header
    "authenticFlavours": "Authentic Flavours",
    "optionProduct": "PRODUCTS",
    "optionRestaurant": "FOR RESTAURANTS",
    "optionAbout": "ABOUT US",
    "optionContact":"CONTACT",
    //sección footer
    "followUs": "Follow us",
    "shortCuts": "Links",
    "ourPruductsLinks": "Our products",
    "forRestaurantsLinks":"For restaurants",
    "aboutUsLink": "About us",
    "contactLinks": "Contact",
    "usufulLinks": "About",
    "shippigInfoLinks": "Shipping info",
    "policyLinks": "Privacy policy",
    //privacy
    "privacy-policy-title": "Privacy Policy",
   
    "section-1": "§ 1",
    "general-provisions": "General provisions",
    "general-provisions-text": "This Policy explains our collection and use of personal data in accordance with the provisions of the Regulation of the European Parliament and of the Council (EU) of April 27, 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (hereinafter referred to as GDPR).",
    "personal-data-administrator-title": "Personal data administrator",
    "personal-data-administrator-text": "Bodega Sur based in Krakow, Poland, which operates the online store Bodega Sur operating at https://bodegasur.com",
    "data-protection-inspector-title": "Data protection inspector",
    "data-protection-inspector-text": "The Data Protection Consultant can be contacted by sending by e-mail to hola@bodegasur.com. The Data Protection Consultant can be contacted on all matters concerning the processing of personal data and the exercise of rights related to data processing.",
    
    "section-2": "§ 2",
    "rights-to-be-exercised-title": "Rights to be exercised",
    "rights-to-be-exercised-text": "The possibility of exercising the rights, i.e. the right to request access to personal data, rectification, erasure, restriction of processing, the right to data portability, the right to object to data processing—depends on the legal basis on which the specific processing is based, as well as the purpose and manner of data processing within the limits specified according to Article 15-22 of the GDPR https://uodo.gov.pl/pl/404. The data controller is not obliged to exercise the rights, in every case and to the same extent. A request for the exercise of a right can be submitted to: hola@bodegasur.com",
    "response-period-text": "The provision of a response to an inquiry is subject to documentation for a period of 3 years in order to document our fulfillment of legal obligations. This period begins when we provide you with a final response.",
    "withdraw-consent-rights": "If the processing is carried out on the basis of Article 6(1)(a) or Article 9(2)(a) - consent to the processing of personal data, you have the right to withdraw your consent at any time without affecting the legality of the processing carried out on the basis of consent before its withdrawal.",
    "complaint-rights-title": "You have the right to lodge a complaint with the supervisory authority in charge of personal data protection in the Member State of residence, place of work or place where the alleged violation was committed. Supervisory authority in Poland:",
    "supervisory-authority-title": "President of the Office for Personal Data Protection",
    "supervisory-authority-address": "Address: Stawki 2, 00-193 Warsaw",
    "supervisory-authority-phone": "Phone: 22 860 70 86",
    "other-authorities-title": "Authorities of other States:",
    "other-authorities-link": "https://uodo.gov.pl/pl/60",
    
    "section-3": "§ 3",
    "security-of-personal-data-title": "Security of personal data",
    "security-of-personal-data-text": "Bodega Sur applies technical and organizational measures to ensure the protection of personal data processing appropriate to the risks and categories of data, and in particular secures personal data.",
    "personal-data-access": "Only persons authorized to process personal data and obliged to keep such data confidential have access to personal data. Any entities entrusted with the processing of personal data on a contractual basis are obliged to protect them using appropriate security measures and will be obliged not to transfer your data without our consent and knowledge.",
    "personal-data-protection-efforts": "Bodega Sur shall make every effort to provide all means of physical, technical and organizational protection of personal data against accidental or intentional destruction, accidental loss, alteration, unauthorized disclosure, use or access, in accordance with all applicable laws.",
    
    "section-4": "§ 4",
    "information-clauses-title": "Information clauses regarding the acquisition of personal data",
    "implementation-orders-title": "Implementation of orders",
    "data-processing-purpose-title": "The purposes of processing personal data, and the legal basis for processing",
    "data-processing-legal-basis": "Personal data processed on the basis of Article 6(1)(b), (c) - execution and settlement of the contract, issuance of invoices, realization of complaints, and Article 6(1)(f) of the GDPR legal interest of recovery and security of claims.",
    "data-recipients-title1": "Information on recipients of personal data or categories of recipients",
    "data-recipients-info": "Personal data are made available to entities authorized by law, entities with which contracts are signed for entrustment of personal data processing, and other entities in accordance with § 5 Recipients of data.",
    "data-processing-time-title":"Period of processing of personal data",
    "data-processing-time-desc":"The data will be processed for the duration of the contract for the transaction, until it is settled, as well as for the period of the statute of limitations for claims, if the processing of such data.",
    "your-rights-title": "Your rights",
    "rights-access": "You have the right to access your data, the right to rectification of personal data, the right to erasure of data—after archiving deadlines, restriction of processing, the right to data portability. Details of the rules for exercising the rights of data subjects are set forth in § 2 The rights to which you are entitled.",
    "obligation-to-provide-data-title": "Information about the obligation to provide data and the consequences of not providing them",
    "data-provision-obligation": "Provision of data is obligatory based on the provision of the law in the rest of the data is voluntary, refusal to provide data is associated with the inability to carry out the order. Provision of data is a statutory condition.",
   
    "participation-in-competitions-title": "Participation in competitions",
    "competition-data-processing-title": "Purposes of personal data processing, and legal basis for processing",
    "competition-legal-basis": "Personal data is processed in the context of participation in a contest on the basis of Article 6(1)(a) of the GDPR and Article 6(1)(c) of the GDPR.",
    "competition-recipients-title": "Information on recipients of personal data or categories of recipients",
    "competition-recipients-info": "Personal data shall be made available to entities authorized by law, entities with which personal data processing entrustment agreements are signed, and other entities in accordance with § 5 Recipients of data.",
    "data-storage-period-title": "Period for which personal data will be stored",
    "data-storage-period-info": "Personal data shall be processed until the competition is held, while observing the archiving deadlines under separate regulations.",
    
    "competition-rights-title": "Rights in force",
    "competition-rights-info": "You have the right to withdraw consent, the right to access your data, the right to rectify personal data, the right to delete data—after archiving deadlines, limitation of processing, the right to data portability. Details of the rules for exercising the rights of data subjects are set forth in § 2 The rights to which you are entitled.",
    "competition-data-provision-title": "Information on the obligation to provide data and the consequence of not providing them",
    "competition-data-provision-info": "Provision of data is voluntary, refusal to provide data entails the inability to participate in the competition.",
    
    "sending-newsletters-title": "Sending newsletters",
    "newsletter-data-processing-title": "Purposes of personal data processing, and legal basis for processing",
    "newsletter-legal-basis": "The data is processed in accordance with Article 6(1)(a) of the GDPR for the purpose of carrying out the ordered Newsletter service, provided electronically on the basis of the consent given.",
    "newsletter-data-recipients-title": "Information on recipients of personal data or categories of recipients",
    "newsletter-data-recipients-info": "Personal data shall be made available to entities authorized by law, entities with which personal data processing entrustment agreements are signed, and other entities in accordance with § 5 Recipients of data.",
    "newsletter-data-storage-period-title": "Period for which personal data will be stored",
    "newsletter-data-storage-period-info": "The Administrator will process personal data until the subscriber cancels the Newsletter service.",
    "newsletter-rights-title": "Rights in force",
    "newsletter-rights-info": "You have the right to withdraw your consent, the right to access your data, the right to rectify your personal data, the right to delete your data—after the archiving deadlines, limitation of processing, the right to data portability. Details of the rules for exercising the rights of data subjects are set forth in § 2 The rights to which you are entitled.",
    "newsletter-data-provision-title": "Information on the obligation to provide data and the consequence of not providing them",
    "newsletter-data-provision-info": "Provision of data is voluntary, refusal to provide data entails the inability to receive the newsletter.",
    
    "marketing-data-processing-title": "Data processing for marketing purposes",
    "marketing-purpose": "Purposes of personal data processing, and legal basis for processing",
    "marketing-purpose-desc": "Personal data will be processed for marketing purposes on the basis of expressed consent pursuant to Article 6(1)(a) of the GDPR, with reference to the provisions of Article 172 and Article 10 of the Act of July 18, 2002 on the provision of electronic services, respectively",
    "marketing-recipients": "Information on recipients of personal data or categories of recipients",
    "marketing-recipients-desc": "Personal data shall be made available to entities authorized by law, entities with which personal data processing entrustment agreements are signed, and other entities in accordance with § 5 Recipients of data.",
    "marketing-storage": "Period for which personal data will be stored",
    "marketing-storage-desc": "Personal data will be processed until you withdraw your consent to data processing.",
    "marketing-rights": "Rights in force",
    "marketing-rights-desc": "You have the right to withdraw your consent, the right to access your data, the right to rectify your personal data, the right to delete your data—after the archiving deadlines, limitation of processing, the right to data portability. Details of the rules for exercising the rights of data subjects are set forth in § 2 The rights to which you are entitled.",
    "marketing-obligation": "Information on the obligation to provide data and the consequence of not providing them",
    "marketing-obligation-desc": "Provision of data is voluntary, lack of consent will prevent sending information for marketing purposes.",
    
    "contact-form-chat-title": "Contact form and chat",
    "contact-purpose": "Purposes of personal data processing, and legal basis for processing",
    "contact-purpose-desc": "Personal data is processed for the purpose of handling correspondence, including providing feedback. The basis for processing is Article 6(1)(f) of the GDPR (legitimate interest: to be able to answer your question and provide feedback).",
    "contact-recipients": "Information on recipients of personal data or categories of recipients",
    "contact-recipients-desc": "Personal data is made available to entities authorized by law, entities with which contracts are signed for the entrustment of personal data processing, and other entities in accordance with § 5 Recipients of data.",
    "contact-storage": "Period for which personal data will be stored",
    "contact-storage-desc": "Personal data will be processed for the period of correspondence and for the period required by archiving regulations.",
    "contact-rights": "Your rights",
    "contact-rights-desc": "You have the right to access your data, the right to rectification of personal data, the right to erasure of data—after the archiving deadlines, restriction of processing, the right to data portability. Details of the rules for exercising the rights of data subjects are set forth in § 2 Rights.",
    "contact-obligation": "Information on the obligation to provide data and the consequence of not providing them",
    "contact-obligation-desc": "Provision of data is required to the extent necessary to receive an answer to the question asked or to solve any problems.",
   
    "email-contact-title": "Email contact",
    "email-purpose": "Purposes of personal data processing, and legal basis for processing",
    "email-purpose-desc": "Personal data is processed for the purpose of handling correspondence, including providing feedback. The basis for processing is Article 6(1)(f) of the GDPR (legitimate interest: to be able to answer your question and provide feedback).",
    "email-recipients": "Information on recipients of personal data or categories of recipients",
    "email-recipients-desc": "Personal data are made available to entities authorized by law, entities with which contracts are signed for the entrustment of personal data processing, and other entities in accordance with § 5 Recipients of data.",
    "email-storage": "Period for which personal data will be stored",
    "email-storage-desc": "Personal data will be processed for the period of correspondence and for the period required by archiving regulations.",
    "email-rights": "Your rights",
    "email-rights-desc": "You have the right to withdraw your consent, the right to access your data, the right to rectify personal data, the right to delete data—after the archiving deadlines, limitation of processing, the right to data portability. Details of the rules for exercising the rights of data subjects are set forth in § 2 The rights to which you are entitled.",
    "email-obligation": "Information on the obligation to provide data and the consequence of not providing them",
    "email-obligation-desc": "Provision of data is required to the extent necessary to receive an answer to the question asked or to solve any problems (e-mail address).",   
   
    "data-recipients-section": "§ 5",
    "data-recipients-title": "Recipients of data",
    "data-recipients-intro": "Bodega Sur, headquartered in Krakow, shares your personal data only with such entities and organizations that protect them and act in accordance with applicable data protection laws. Your data may be transferred to the following recipients:",
    "data-recipients-controllers": "Separate data controllers or co-controllers:",
    "data-recipients-controllers-postal": "Postal operators, couriers and suppliers, in case it is necessary for the delivery to you;",
    "data-recipients-controllers-consulting": "Entities performing consulting, auditing activities;",
    "data-recipients-controllers-payments": "Entities handling electronic payments or payment cards to the extent necessary to handle the payment made by the customer, as well as to handle the possible return of the amounts paid (when you withdraw from the purchase contract). In particular, we provide information on the amount of payment to the selected payment service provider;",
    "data-recipients-controllers-authorized": "Entities or institutions authorized to obtain them under applicable law, e.g. law enforcement agencies in the event they issue a request for access to data, on an appropriate legal basis (e.g. for the purposes of ongoing criminal proceedings).",
    "data-recipients-processors": "Processors:",
    "data-recipients-processors-marketing": "Specialized service providers in the Internet marketing sector who process your data (pseudonymized profiles using cookie technology and the like) on our behalf for the purpose of marketing communications in advertising networks;",
    "data-recipients-processors-it": "Service providers that supply the administrator with technical, IT solutions that enable the operation of the online store and the services provided through it (in particular, computer software providers, email providers and hosting providers);",
    "data-recipients-processors-logistics": "Service providers supplying the administrator with logistical solutions;",
    "data-recipients-processors-other": "Other entities, if it results from arrangements with you.",
    
    "transfers-section": "§ 6",
    "transfers-title": "Transfers to third countries",
    "transfers-intro": "Except as described in the Policy, we do not transfer your personal data to recipients located outside the European Union or the European Economic Area.",
    "transfers-detail": "If we transfer personal data to recipients outside the European Economic Area (EEA), this is only done if an adequate level of data protection has been confirmed for that third country by the European Commission, an adequate level of data protection has been agreed with the recipient (e.g. using EU standard contractual clauses), or if we have obtained your consent.",
    
    "final-provisions-section": "§ 7",
    "final-provisions-title": "Final Provisions",
    "final-provisions-dude":"If you have any questions, objections or concerns about the content of this Policy or the way we process your personal data, or any complaints regarding these issues, please contact us by sending an email to: hola@bodegasur.com.",
    "final-provisions-thankyou": "For our part, we thank you for your trust and we will do our best to keep your data safe and our processing of your data in compliance with applicable laws.",
    "final-provisions-effective-date": "This policy is effective as of 10.10.2024. Bodega Sur, based in Krakow reserves the right to make necessary changes and updates to this Policy by publishing new content on our website. After the change, the Policy will appear on the website with the new date.",
    
    "back-to-home-button": "Back to Home"
    // Continúa con más textos según sea necesario
};

const translationsEs = {
    //header
    "authenticFlavours": "Sabores Auténticos",
    "optionProduct": "PRODUCTOS",
    "optionRestaurant": "PARA RESTAURANTES",
    "optionAbout": "SOBRE NOSOTROS",
    "optionContact":"CONTACTO",
     //sección footer
     "followUs": "Siguenos",
     "shortCuts": "Links",
     "ourPruductsLinks": "Nuestros productos",
     "forRestaurantsLinks":"Para restaurantes",
     "aboutUsLink": "Sobre nosotros",
     "contactLinks": "Contacto",
     "usufulLinks": "Sobre",
     "shippigInfoLinks": "Información de envío",
     "policyLinks": "Política de privacidad",
    //privacy
    "privacy-policy-title": "Política de Privacidad",
    
    "section-1": "§ 1",
    "general-provisions": "Disposiciones Generales",
    "general-provisions-text": "Esta Política explica nuestra recopilación y uso de datos personales de acuerdo con el Reglamento del Parlamento Europeo y del Consejo (UE) del 27 de abril de 2016 sobre la protección de las personas físicas en lo que respecta al tratamiento de datos personales y sobre la libre circulación de estos datos, y deroga la Directiva 95/46/CE (en adelante, GDPR).",
    "personal-data-administrator-title": "Administrador de Datos Personales",
    "personal-data-administrator-text": "Bodega Sur con sede en Cracovia, Polonia, que opera la tienda en línea Bodega Sur en https://bodegasur.com",
    "data-protection-inspector-title": "Inspector de Protección de Datos",
    "data-protection-inspector-text": "Se puede contactar al Consultor de Protección de Datos enviando un correo electrónico a hola@bodegasur.com. El Consultor puede ser contactado para cualquier asunto relacionado con el tratamiento de datos personales y el ejercicio de los derechos relacionados con el tratamiento de datos.",
    
    "section-2": "§ 2",
    "rights-to-be-exercised-title": "Derechos a Ejercer",
    "rights-to-be-exercised-text": "La posibilidad de ejercer los derechos, es decir, el derecho a solicitar acceso a los datos personales, rectificación, eliminación, restricción del procesamiento, portabilidad de los datos, y el derecho a oponerse al procesamiento de los datos depende de la base legal en la que se fundamenta el tratamiento específico, así como el propósito y modo de procesamiento dentro de los límites especificados según los Artículos 15-22 del GDPR https://uodo.gov.pl/pl/404. El controlador de datos no está obligado a ejercer los derechos en todos los casos ni en la misma medida. Una solicitud para el ejercicio de un derecho puede enviarse a: hola@bodegasur.com",
    "response-period-text": "La respuesta a una consulta está sujeta a documentación por un período de 3 años con el fin de documentar nuestro cumplimiento de las obligaciones legales. Este período comienza cuando le proporcionamos una respuesta final.",
    "withdraw-consent-rights": "Si el procesamiento se realiza sobre la base del Artículo 6(1)(a) o el Artículo 9(2)(a) - consentimiento para el tratamiento de datos personales, usted tiene derecho a retirar su consentimiento en cualquier momento sin afectar la legalidad del tratamiento realizado en base al consentimiento antes de su retirada.",
    "complaint-rights-title": "Tiene derecho a presentar una queja ante la autoridad supervisora encargada de la protección de datos personales en el Estado Miembro de residencia, lugar de trabajo o lugar donde se cometió la presunta violación. Autoridad supervisora en Polonia:",
    "supervisory-authority-title": "Presidente de la Oficina de Protección de Datos Personales",
    "supervisory-authority-address": "Dirección: Stawki 2, 00-193 Varsovia",
    "supervisory-authority-phone": "Teléfono: 22 860 70 86",
    "other-authorities-title": "Autoridades de otros Estados:",
    "other-authorities-link": "https://uodo.gov.pl/pl/60",
   
    "section-3": "§ 3",
    "security-of-personal-data-title": "Seguridad de los Datos Personales",
    "security-of-personal-data-text": "Bodega Sur aplica medidas técnicas y organizativas para garantizar la protección del procesamiento de datos personales apropiadas a los riesgos y categorías de datos, y en particular, asegura los datos personales.",
    "personal-data-access": "Solo las personas autorizadas para procesar datos personales y obligadas a mantener dichos datos confidenciales tienen acceso a los datos personales. Las entidades a las que se confía el procesamiento de datos personales en virtud de contratos están obligadas a protegerlos utilizando medidas de seguridad adecuadas y estarán obligadas a no transferir sus datos sin nuestro consentimiento y conocimiento.",
    "personal-data-protection-efforts": "Bodega Sur hará todo lo posible para proporcionar todos los medios de protección física, técnica y organizativa de los datos personales contra la destrucción accidental o intencional, la pérdida accidental, la alteración, la divulgación no autorizada, el uso o acceso no autorizado, de acuerdo con todas las leyes aplicables.",
   
    "section-4": "§ 4",
    "information-clauses-title": "Cláusulas Informativas sobre la Obtención de Datos Personales",
    "implementation-orders-title": "Implementación de Órdenes",
    "data-processing-purpose-title": "Los propósitos del tratamiento de datos personales y la base legal para el tratamiento",
    "data-processing-legal-basis": "Los datos personales se procesan en base al Artículo 6(1)(b), (c) - ejecución y liquidación del contrato, emisión de facturas, realización de quejas, y el Artículo 6(1)(f) del GDPR interés legal de recuperación y seguridad de reclamaciones.",
    "data-recipients-title1": "Información sobre los destinatarios de los datos personales o categorías de destinatarios",
    "data-recipients-info": "Los datos personales se ponen a disposición de entidades autorizadas por la ley, entidades con las que se firman contratos para la encomienda del procesamiento de datos personales, y otras entidades de acuerdo con el § 5 Destinatarios de los datos.",
    "data-processing-time-title":"Periodo de tratamiento de los datos personales",
    "data-processing-time-desc":"Los datos se tratarán mientras dure el contrato de la transacción, hasta que se resuelva, así como durante el plazo de prescripción de las reclamaciones, si el tratamiento de dichos datos.",
    "your-rights-title": "Tus derechos",
    "rights-access": "Tienes derecho a acceder a tus datos, derecho a la rectificación de los datos personales, derecho a la eliminación de los datos—después de los plazos de archivo, restricción del procesamiento, derecho a la portabilidad de los datos. Los detalles de las normas para ejercer los derechos de los sujetos de datos se establecen en el § 2 Los derechos a los que tienes derecho.",
    "obligation-to-provide-data-title": "Información sobre la obligación de proporcionar datos y las consecuencias de no proporcionarlos",
    "data-provision-obligation": "La provisión de datos es obligatoria según lo establecido por la ley, los demás datos son voluntarios; la negativa a proporcionar datos está asociada con la imposibilidad de realizar el pedido. La provisión de datos es una condición legal.",
    "participation-in-competitions-title": "Participación en competiciones",
    "competition-data-processing-title": "Finalidades del procesamiento de datos personales y base legal para el procesamiento",
    "competition-legal-basis": "Los datos personales se procesan en el contexto de la participación en un concurso sobre la base del Artículo 6(1)(a) del RGPD y el Artículo 6(1)(c) del RGPD.",
    "competition-recipients-title": "Información sobre los destinatarios de los datos personales o categorías de destinatarios",
    "competition-recipients-info": "Los datos personales serán puestos a disposición de entidades autorizadas por la ley, entidades con las que se firman contratos para el procesamiento de datos personales, y otras entidades de acuerdo con el § 5 Destinatarios de los datos.",
    "data-storage-period-title": "Periodo durante el cual se almacenarán los datos personales",
    "data-storage-period-info": "Los datos personales serán procesados hasta la realización del concurso, observando los plazos de archivo bajo regulaciones separadas.",
    "competition-rights-title": "Derechos vigentes",
    "competition-rights-info": "Tienes derecho a retirar el consentimiento, derecho a acceder a tus datos, derecho a rectificar los datos personales, derecho a eliminar los datos—después de los plazos de archivo, limitación del procesamiento, derecho a la portabilidad de los datos. Los detalles de las normas para ejercer los derechos de los sujetos de datos se establecen en el § 2 Los derechos a los que tienes derecho.",
    "competition-data-provision-title": "Información sobre la obligación de proporcionar datos y las consecuencias de no proporcionarlos",
    "competition-data-provision-info": "La provisión de datos es voluntaria, la negativa a proporcionar datos conlleva la imposibilidad de participar en el concurso.",
    "sending-newsletters-title": "Envío de boletines",
    "newsletter-data-processing-title": "Finalidades del procesamiento de datos personales y base legal para el procesamiento",
    "newsletter-legal-basis": "Los datos se procesan de acuerdo con el Artículo 6(1)(a) del RGPD con el fin de llevar a cabo el servicio solicitado del Boletín informativo, proporcionado electrónicamente sobre la base del consentimiento otorgado.",
    "newsletter-data-recipients-title": "Información sobre los destinatarios de los datos personales o categorías de destinatarios",
    "newsletter-data-recipients-info": "Los datos personales serán puestos a disposición de entidades autorizadas por la ley, entidades con las que se firman acuerdos de encomienda para el procesamiento de datos personales, y otras entidades de acuerdo con el § 5 Destinatarios de los datos.",
    "newsletter-data-storage-period-title": "Periodo durante el cual se almacenarán los datos personales",
    "newsletter-data-storage-period-info": "El Administrador procesará los datos personales hasta que el suscriptor cancele el servicio del Boletín informativo.",
    "newsletter-rights-title": "Derechos vigentes",
    "newsletter-rights-info": "Tienes derecho a retirar tu consentimiento, derecho a acceder a tus datos, derecho a rectificar tus datos personales, derecho a eliminar tus datos—después de los plazos de archivo, limitación del procesamiento, derecho a la portabilidad de los datos. Los detalles de las normas para ejercer los derechos de los sujetos de datos se establecen en el § 2 Los derechos a los que tienes derecho.",
    "newsletter-data-provision-title": "Información sobre la obligación de proporcionar datos y las consecuencias de no proporcionarlos",
    "newsletter-data-provision-info": "La provisión de datos es voluntaria, la negativa a proporcionar datos conlleva la imposibilidad de recibir el boletín.",
    
    "marketing-data-processing-title": "Procesamiento de datos con fines de marketing",
    "marketing-purpose": "Finalidades del procesamiento de datos personales y base legal para el procesamiento",
    "marketing-purpose-desc": "Los datos personales serán procesados con fines de marketing sobre la base del consentimiento expreso conforme al Artículo 6(1)(a) del RGPD, con referencia a las disposiciones del Artículo 172 y el Artículo 10 de la Ley del 18 de julio de 2002 sobre la provisión de servicios electrónicos, respectivamente.",
    "marketing-recipients": "Información sobre los destinatarios de los datos personales o categorías de destinatarios",
    "marketing-recipients-desc": "Los datos personales serán puestos a disposición de entidades autorizadas por la ley, entidades con las que se firman acuerdos de encomienda para el procesamiento de datos personales, y otras entidades de acuerdo con el § 5 Destinatarios de los datos.",
    "marketing-storage": "Periodo durante el cual se almacenarán los datos personales",
    "marketing-storage-desc": "Los datos personales serán procesados hasta que retires tu consentimiento para el procesamiento de datos.",
    "marketing-rights": "Derechos vigentes",
    "marketing-rights-desc": "Tienes derecho a retirar tu consentimiento, derecho a acceder a tus datos, derecho a rectificar tus datos personales, derecho a eliminar tus datos—después de los plazos de archivo, limitación del procesamiento, derecho a la portabilidad de los datos. Los detalles de las normas para ejercer los derechos de los sujetos de datos se establecen en el § 2 Los derechos a los que tienes derecho.",
    "marketing-obligation": "Información sobre la obligación de proporcionar datos y las consecuencias de no proporcionarlos",
    "marketing-obligation-desc": "La provisión de datos es voluntaria, la falta de consentimiento impedirá el envío de información con fines de marketing.",
    
    "contact-form-chat-title": "Formulario de contacto y chat",
    "contact-purpose": "Finalidades del procesamiento de datos personales y base legal para el procesamiento",
    "contact-purpose-desc": "Los datos personales se procesan con el fin de manejar la correspondencia, incluida la provisión de respuestas. La base para el procesamiento es el Artículo 6(1)(f) del RGPD (interés legítimo: poder responder a tu pregunta y proporcionar una respuesta).",
    "contact-recipients": "Información sobre los destinatarios de los datos personales o categorías de destinatarios",
    "contact-recipients-desc": "Los datos personales serán puestos a disposición de entidades autorizadas por la ley, entidades con las que se firman contratos para la encomienda del procesamiento de datos personales, y otras entidades de acuerdo con el § 5 Destinatarios de los datos.",
    "contact-storage": "Periodo durante el cual se almacenarán los datos personales",
    "contact-storage-desc": "Los datos personales serán procesados durante el periodo de correspondencia y el tiempo requerido por las normativas de archivo.",
    "contact-rights": "Tus derechos",
    "contact-rights-desc": "Tienes derecho a acceder a tus datos, derecho a la rectificación de los datos personales, derecho a la eliminación de los datos—después de los plazos de archivo, limitación del procesamiento, derecho a la portabilidad de los datos. Los detalles de las normas para ejercer los derechos de los sujetos de datos se establecen en el § 2 Derechos.",
    "contact-obligation": "Información sobre la obligación de proporcionar datos y las consecuencias de no proporcionarlos",
    "contact-obligation-desc": "La provisión de datos es obligatoria en la medida necesaria para recibir una respuesta a la pregunta realizada o resolver problemas.",
    
    "email-contact-title": "Contacto por correo electrónico",
    "email-purpose": "Finalidades del tratamiento de los datos personales y base legal para el tratamiento",
    "email-purpose-desc": "Los datos personales se procesan con el propósito de gestionar la correspondencia, incluyendo la provisión de retroalimentación. La base para el tratamiento es el Artículo 6(1)(f) del RGPD (interés legítimo: poder responder a su pregunta y proporcionar retroalimentación).",
    "email-recipients": "Información sobre los destinatarios de los datos personales o categorías de destinatarios",
    "email-recipients-desc": "Los datos personales se ponen a disposición de entidades autorizadas por la ley, entidades con las que se firman contratos para la cesión del tratamiento de datos personales y otras entidades de acuerdo con el § 5 Destinatarios de los datos.",
    "email-storage": "Periodo durante el cual se almacenarán los datos personales",
    "email-storage-desc": "Los datos personales se procesarán durante el período de la correspondencia y durante el tiempo requerido por las normativas de archivo.",
    "email-rights": "Tus derechos",
    "email-rights-desc": "Tienes el derecho a retirar tu consentimiento, el derecho a acceder a tus datos, el derecho a rectificar los datos personales, el derecho a eliminar los datos—después de los plazos de archivo, limitación del tratamiento, el derecho a la portabilidad de los datos. Los detalles de las reglas para ejercer los derechos de los interesados se establecen en el § 2 Los derechos a los que tienes derecho.",
    "email-obligation": "Información sobre la obligación de proporcionar datos y las consecuencias de no proporcionarlos",
    "email-obligation-desc": "La provisión de datos es requerida en la medida necesaria para recibir una respuesta a la pregunta realizada o para resolver cualquier problema (dirección de correo electrónico).",
    
    "data-recipients-section": "§ 5",
    "data-recipients-title": "Destinatarios de los datos",
    "data-recipients-intro": "Bodega Sur, con sede en Cracovia, comparte tus datos personales solo con aquellas entidades y organizaciones que los protegen y actúan de acuerdo con las leyes de protección de datos aplicables. Tus datos pueden ser transferidos a los siguientes destinatarios:",
    "data-recipients-controllers": "Controladores de datos separados o co-controladores:",
    "data-recipients-controllers-postal": "Operadores postales, mensajeros y proveedores, en caso de ser necesario para la entrega a ti;",
    "data-recipients-controllers-consulting": "Entidades que realizan actividades de consultoría y auditoría;",
    "data-recipients-controllers-payments": "Entidades que gestionan pagos electrónicos o tarjetas de pago en la medida necesaria para gestionar el pago realizado por el cliente, así como para manejar la posible devolución de los montos pagados (cuando canceles el contrato de compra). En particular, proporcionamos información sobre el monto del pago al proveedor de servicios de pago seleccionado;",
    "data-recipients-controllers-authorized": "Entidades o instituciones autorizadas para obtenerlos según la ley aplicable, por ejemplo, agencias de la ley en caso de que emitan una solicitud de acceso a los datos, sobre la base legal adecuada (por ejemplo, para fines de procedimientos penales en curso).",
    "data-recipients-processors": "Encargados del tratamiento:",
    "data-recipients-processors-marketing": "Proveedores de servicios especializados en el sector de marketing en Internet que procesan tus datos (perfiles seudonimizados mediante tecnología de cookies y similares) en nuestro nombre para la comunicación de marketing en redes publicitarias;",
    "data-recipients-processors-it": "Proveedores de servicios que suministran al administrador soluciones técnicas e informáticas que permiten el funcionamiento de la tienda en línea y los servicios proporcionados a través de ella (en particular, proveedores de software, proveedores de correo electrónico y proveedores de hosting);",
    "data-recipients-processors-logistics": "Proveedores de servicios que suministran al administrador soluciones logísticas;",
    "data-recipients-processors-other": "Otras entidades, si resulta de los acuerdos contigo.",
    
    "transfers-section": "§ 6",
    "transfers-title": "Transferencias a terceros países",
    "transfers-intro": "Excepto lo descrito en la Política, no transferimos tus datos personales a destinatarios ubicados fuera de la Unión Europea o el Espacio Económico Europeo.",
    "transfers-detail": "Si transferimos datos personales a destinatarios fuera del Espacio Económico Europeo (EEE), esto solo se realiza si se ha confirmado un nivel adecuado de protección de datos para ese tercer país por parte de la Comisión Europea, si se ha acordado un nivel adecuado de protección de datos con el destinatario (por ejemplo, utilizando cláusulas contractuales estándar de la UE), o si hemos obtenido tu consentimiento.",
    
    "final-provisions-section": "§ 7",
    "final-provisions-title": "Disposiciones finales",
    "final-provisions-dude":"Si tiene alguna pregunta, objeción o duda sobre el contenido de esta Política o la forma en que procesamos sus datos personales, o si tiene alguna queja sobre estos asuntos, póngase en contacto con nosotros a través de la dirección de correo electrónico: hola@bodegasur.com.",
    "final-provisions-thankyou": "Por nuestra parte, te agradecemos por tu confianza y haremos todo lo posible para mantener tus datos seguros y procesarlos de acuerdo con las leyes aplicables.",
    "final-provisions-effective-date": "Esta política entra en vigor el 10.10.2024. Bodega Sur, con sede en Cracovia, se reserva el derecho de realizar cambios y actualizaciones necesarios a esta política publicando nuevos contenidos en nuestro sitio web. Después del cambio, la política aparecerá en el sitio web con la nueva fecha.",
   
    "back-to-home-button": "Volver a la página principal"
   // Continúa con más textos según sea necesario
};
const translationsPl = {
    //header
    "authenticFlavours": "Authentic Flavours",
    "optionProduct": "PRODUKTY",
    "optionRestaurant": "DLA RESTAURACJI",
    "optionAbout": "O NAS",
    "optionContact":"KONTAKT",
     //sección footer
    "followUs": "Obserwuj nas",
    "shortCuts": "Poznaj nas",
    "ourPruductsLinks": "Produkty",
    "forRestaurantsLinks":"Dla restauracji",
    "aboutUsLink": "O nas",
    "contactLinks": "Kontakt",
    "usufulLinks": "Przydatne",
    "shippigInfoLinks": "Wysyłka",
    "policyLinks": "Polityka prywatności",
    //privacy
    "privacy-policy-title": "Polityka prywatności",
    
    "section-1": "§ 1",
    "general-provisions": "Postanowienia ogólne",
    "general-provisions-text": "Niniejsza Polityka wyjaśnia gromadzenie i wykorzystywanie przez nas danych osobowych zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej jako RODO).",
    "personal-data-administrator-title": "Administrator danych osobowych",
    "personal-data-administrator-text": "Bodega Sur z siedzibą w Krakowie, Polska, prowadząca sklep internetowy Bodega Sur działający pod adresem https://www.bodegasur.com",
    "data-protection-inspector-title": "Konsultant ds. ochrony danych",
    "data-protection-inspector-text": "Z Konsultantem ds. ochrony danych osobowych można skontaktować się wysyłając wiadomość e-mail na adres hola@bodegasur.com. Z Konsultantem Ochrony Danych można kontaktować się we wszystkich sprawach dotyczących przetwarzania danych osobowych oraz korzystania z praw związanych z przetwarzaniem danych.",
    
    "section-2": "§ 2",
    "rights-to-be-exercised-title": "Przysługujące prawa",
    "rights-to-be-exercised-text": "Możliwość skorzystania z praw, tj. prawa do żądania dostępu do danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania, prawa do przenoszenia danych, prawa do wniesienia sprzeciwu wobec przetwarzania danych - zależy od podstawy prawnej, na której opiera się konkretne przetwarzanie, a także od celu i sposobu przetwarzania danych w granicach określonych zgodnie z art. 15-22 RODO https://uodo.gov.pl/pl/404. Administrator danych nie jest zobowiązany do wykonania praw w każdym przypadku i w takim samym zakresie. Żądanie realizacji prawa można zgłosić na adres: hola@bodegasur.com",
    "response-period-text": "Udzielenie odpowiedzi na zapytanie podlega dokumentowaniu przez okres 3 lat w celu udokumentowania wypełnienia przez nas obowiązków prawnych. Okres ten rozpoczyna się w momencie udzielenia ostatecznej odpowiedzi.",
    "withdraw-consent-rights": "Jeżeli przetwarzanie odbywa się na podstawie art. 6 ust. 1 lit. a) lub art. 9 ust. 2 lit. a) - zgoda na przetwarzanie danych osobowych, masz prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem;",
    "complaint-rights-title": "Przysługuje Pani/Panu prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych w państwie członkowskim Pani/Pana zwykłego pobytu, miejsca pracy lub miejsca popełnienia domniemanego naruszenia. Organ nadzorczy w Polsce:",
    "supervisory-authority-title": "Prezes Urzędu Ochrony Danych Osobowych",
    "supervisory-authority-address": "Adres: ul. Stawki 2, 00-193 Warszawa",
    "supervisory-authority-phone": "Telefon: 22 860 70 86",
    "other-authorities-title": "Organy innych państw:",
    "other-authorities-link": "https://uodo.gov.pl/pl/60",
    
    "section-3": "§ 3",
    "security-of-personal-data-title": "Bezpieczeństwo danych osobowych",
    "security-of-personal-data-text": "Bodega Sur stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzania danych osobowych odpowiednią do zagrożeń oraz kategorii danych, a w szczególności zabezpiecza dane osobowe.",
    "personal-data-access":"Dostęp do danych osobowych mają jedynie osoby upoważnione do przetwarzania danych osobowych i zobowiązane do zachowania tych danych w poufności. Wszelkie podmioty, którym powierzono przetwarzanie danych osobowych na podstawie umowy, są zobowiązane do ich ochrony przy zastosowaniu odpowiednich środków bezpieczeństwa oraz będą zobowiązane do nieprzekazywania Państwa danych bez naszej zgody i wiedzy.",
    "personal-data-protection-efforts": "Bodega Sur dołoży wszelkich starań, aby zapewnić wszelkie środki fizycznej, technicznej i organizacyjnej ochrony danych osobowych przed przypadkowym lub celowym zniszczeniem, przypadkową utratą, zmianą, nieuprawnionym ujawnieniem, wykorzystaniem lub dostępem, zgodnie ze wszystkimi obowiązującymi przepisami prawa.",
    
    "section-4": "§ 4",
    "information-clauses-title": "Klauzule informacyjne dotyczące pozyskiwania danych osobowych",
    "implementation-orders-title": "Realizacja zamówień",
    "data-processing-purpose-title": "Cele przetwarzania danych osobowych oraz podstawa prawna przetwarzania",
    "data-processing-legal-basis": "Dane osobowe przetwarzane na podstawie art. 6 ust. 1 lit. b, c - wykonanie i rozliczenie umowy, wystawianie faktur, realizacja reklamacji oraz art. 6 ust. 1 lit. f RODO interes prawny polegający na dochodzeniu i zabezpieczeniu roszczeń.",
    "data-recipients-title1": "Informacje o odbiorcach danych osobowych lub kategoriach odbiorców",
    "data-recipients-info": "Dane osobowe udostępniane są podmiotom upoważnionym na podstawie przepisów prawa, podmiotom z którymi podpisane są umowy powierzenia przetwarzania danych osobowych oraz innym podmiotom zgodnie z § 5 Odbiorcy danych.",
    "data-processing-time-title":"Okres przetwarzania danych osobowych",
    "data-processing-time-desc":"Dane będą przetwarzane przez okres trwania umowy dotyczącej transakcji, do czasu jej rozliczenia, a także przez okres przedawnienia roszczeń, jeżeli przetwarzanie tych danych będzie niezbędne do ustalenia lub dochodzenia roszczeń, a także obrony przed takimi roszczeniami.",
    "your-rights-title": "Prawa użytkownika",
    "rights-access": "Przysługuje Pani/Panu prawo dostępu do treści swoich danych, prawo do sprostowania danych osobowych, prawo do usunięcia danych - po upływie terminów archiwizacji, ograniczenia przetwarzania, prawo do przenoszenia danych. Szczegółowe zasady realizacji praw osób, których dane dotyczą, zostały określone w § 2 Przysługujące prawa",
    "obligation-to-provide-data-title": "Informacja o obowiązku podania danych i konsekwencjach ich niepodania",
    "data-provision-obligation": "Podanie danych jest obowiązkowe na podstawie przepisu prawa w pozostałym zakresie podanie danych jest dobrowolne, odmowa podania danych wiąże się z brakiem możliwości realizacji zamówienia. Podanie danych jest warunkiem ustawowym.",
    
    "participation-in-competitions-title": "Udział w konkursach",
    "competition-data-processing-title": "Cele przetwarzania danych osobowych i podstawa prawna przetwarzania",
    "competition-legal-basis": "Dane osobowe są przetwarzane w kontekście udziału w konkursie na podstawie art. 6 ust. 1 lit. a) RODO oraz art. 6 ust. 1 lit. c) RODO.",
    "competition-recipients-title": "Informacja o odbiorcach danych osobowych lub kategoriach odbiorców",
    "competition-recipients-info": "Dane osobowe będą udostępniane podmiotom upoważnionym na podstawie przepisów prawa, podmiotom z którymi podpisane są umowy powierzenia przetwarzania danych osobowych oraz innym podmiotom zgodnie z § 5 Odbiorcy danych.",
    "data-storage-period-title": "Okres przechowywania danych osobowych",
    "data-storage-period-info": "Dane osobowe będą przetwarzane do czasu przeprowadzenia konkursu, z zachowaniem terminów archiwizacji wynikających z odrębnych przepisów.",
    "competition-rights-title": "Przysługujące prawa",
    "competition-rights-info": "Przysługuje Pani/Panu prawo do cofnięcia zgody, prawo dostępu do treści swoich danych, prawo do sprostowania danych osobowych, prawo do usunięcia danych - po upływie terminów archiwizacji, ograniczenia przetwarzania, prawo do przenoszenia danych. Szczegółowe zasady realizacji praw osób, których dane dotyczą zostały określone w § 2 Przysługujące prawa.",
    "competition-data-provision-title": "Informacja o obowiązku podania danych i konsekwencjach ich niepodania",
    "competition-data-provision-info": "Podanie danych jest dobrowolne, odmowa podania danych wiąże się z brakiem możliwości wzięcia udziału w konkursie.",
    
    "sending-newsletters-title": "Wysyłanie newsletterów",
    "newsletter-data-processing-title": "Cele przetwarzania danych osobowych i podstawa prawna przetwarzania",
    "newsletter-legal-basis": "Dane przetwarzane są na podstawie art. 6 ust. 1 lit. a RODO w celu realizacji zamówionej usługi Newslettera, świadczonej drogą elektroniczną na podstawie udzielonej zgody.",
    "newsletter-data-recipients-title": "Informacja o odbiorcach danych osobowych lub kategoriach odbiorców",
    "newsletter-data-recipients-info": "Dane osobowe będą udostępniane podmiotom upoważnionym na podstawie przepisów prawa, podmiotom z którymi podpisane są umowy powierzenia przetwarzania danych osobowych oraz innym podmiotom zgodnie z § 5 Odbiorcy danych.",
    "newsletter-data-storage-period-title": "Okres, przez który dane osobowe będą przechowywane",
    "newsletter-data-storage-period-info": "Administrator będzie przetwarzał dane osobowe do czasu rezygnacji przez subskrybenta z usługi Newsletter.",
    "newsletter-rights-title": "Przysługujące prawa",
    "newsletter-rights-info": "Subskrybent ma prawo do wycofania zgody, prawo dostępu do treści swoich danych, prawo do sprostowania danych osobowych, prawo do usunięcia danych - po upływie terminów archiwizacji, ograniczenia przetwarzania, prawo do przenoszenia danych. Szczegółowe zasady realizacji praw osób, których dane dotyczą zostały określone w § 2 Przysługujące prawa.",
    "newsletter-data-provision-title": "Informacja o obowiązku podania danych i konsekwencjach ich niepodania",
    "newsletter-data-provision-info": "Podanie danych jest dobrowolne, odmowa podania danych wiąże się z brakiem możliwości otrzymywania newslettera.",
    "marketing-data-processing-title": "Przetwarzanie danych w celach marketingowych",
    "marketing-purpose": "Cele przetwarzania danych osobowych i podstawa prawna przetwarzania",
    "marketing-purpose-desc": "Dane osobowe będą przetwarzane w celach marketingowych na podstawie wyrażonej zgody zgodnie z art. 6 ust. 1 lit. a RODO, z uwzględnieniem odpowiednio przepisów art. 172 i art. 10 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.",
    "marketing-recipients": "Informacje o odbiorcach danych osobowych lub kategoriach odbiorców",
    "marketing-recipients-desc": "Dane osobowe będą udostępniane podmiotom upoważnionym na podstawie przepisów prawa, podmiotom z którymi podpisane są umowy powierzenia przetwarzania danych osobowych oraz innym podmiotom zgodnie z § 5 Odbiorcy danych.",
    "marketing-storage": "Okres, przez który dane osobowe będą przechowywane",
    "marketing-storage-desc": "Dane osobowe będą przetwarzane do momentu wycofania zgody na przetwarzanie danych.",
    "marketing-rights": "Przysługujące prawa",
    "marketing-rights-desc": "Subskrybent ma prawo do wycofania zgody, prawo dostępu do treści swoich danych, prawo do sprostowania danych osobowych, prawo do usunięcia danych - po upływie terminów archiwizacji, ograniczenia przetwarzania, prawo do przenoszenia danych. Szczegółowe zasady realizacji praw osób, których dane dotyczą zostały określone w § 2 Przysługujące prawa.",
    "marketing-obligation": "Informacje o obowiązku podania danych i konsekwencjach ich niepodania",
    "marketing-obligation-desc": "Podanie danych jest dobrowolne, odmowa podania danych wiąże się z brakiem możliwości otrzymywania informacji marketingowych.",
    "contact-form-chat-title": "Formularz kontaktowy",
    "contact-purpose": "Cele przetwarzania danych osobowych i podstawa prawna przetwarzania",
    "contact-purpose-desc": "Dane osobowe są przetwarzane w celu obsługi korespondencji, w tym przekazywania informacji zwrotnych.Podstawą przetwarzania danych jest art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes: możliwość udzielenia odpowiedzi na zadane pytanie i przekazania informacji zwrotnej).",
    "contact-recipients": "Informacje o odbiorcach danych osobowych lub kategoriach odbiorców",
    "contact-recipients-desc": "Dane osobowe będą udostępniane podmiotom upoważnionym na podstawie przepisów prawa, podmiotom z którymi podpisane są umowy powierzenia przetwarzania danych osobowych oraz innym podmiotom zgodnie z § 5 Odbiorcy danych",
    "contact-storage": "Okres, przez który dane osobowe będą przechowywane",
    "contact-storage-desc": "Dane osobowe będą przetwarzane do momentu wycofania zgody na przetwarzanie danych.",
    "contact-rights": "Przysługujące prawa",
    "contact-rights-desc": "Użytkownik ma prawo dostępu do swoich danych, prawo do sprostowania danych osobowych, prawo do usunięcia danych - po upływie terminów archiwizacji, ograniczenia przetwarzania, prawo do przenoszenia danych Szczegółowe zasady wykonywania praw osób, których dane dotyczą, zostały określone w § 2 Przysługujące prawa.",
    "contact-obligation": "Informacja o obowiązku podania danych i konsekwencjach ich niepodania",
    "contact-obligation-desc": "Podanie danych jest wymagane w zakresie niezbędnym do uzyskania odpowiedzi na zadane pytanie lub rozwiązania jakichkolwiek problemów.",
   
    "email-contact-title": "Kontakt e-mailowy",
    "email-purpose": "Cele przetwarzania danych osobowych oraz podstawa prawna przetwarzania",
    "email-purpose-desc": "Dane osobowe są przetwarzane w celu obsługi korespondencji, w tym przekazywania informacji zwrotnych. Podstawą przetwarzania jest art. 6 ust. 1 lit. f) RODO (prawnie uzasadniony interes: możliwość udzielenia odpowiedzi na zadane pytanie i przekazania informacji zwrotnej).",
    "email-recipients":"Informacje o odbiorcach danych osobowych lub kategoriach odbiorców",
    "email-recipients-desc":"Dane osobowe udostępniane są podmiotom upoważnionym na podstawie przepisów prawa, podmiotom z którymi podpisane są umowy powierzenia przetwarzania danych osobowych oraz innym podmiotom zgodnie z § 5 Odbiorcy danych.",
    "email-storage": "Okres, przez który dane osobowe będą przechowywane",
    "email-storage-desc": "Dane osobowe będą przetwarzane przez okres prowadzenia korespondencji oraz przez okres wymagany przepisami o archiwizacji.",
    "email-rights": "Przysługujące prawa",
    "email-rights-desc": "Przysługuje Pani/Panu prawo do cofnięcia zgody, prawo dostępu do treści swoich danych, prawo do sprostowania danych osobowych, prawo do usunięcia danych - po upływie terminów archiwizacji, ograniczenia przetwarzania, prawo do przenoszenia danych. Szczegółowe zasady realizacji praw osób, których dane dotyczą zostały określone w § 2 Przysługujące prawa.",
    "email-obligation": "Informacja o obowiązku podania danych i konsekwencjach ich niepodania",
    "email-obligation-desc": "Podanie danych jest wymagane w zakresie niezbędnym do otrzymania odpowiedzi na zadane pytanie lub rozwiązania ewentualnych problemów (adres e-mail).",
   
    "data-recipients-section": "§ 5",
    "data-recipients-title": "Odbiorcy danych",
    "data-recipients-intro": "Bodega Sur z siedzibą w Krakowie udostępnia Państwa dane osobowe wyłącznie takim podmiotom i organizacjom, które je chronią i działają zgodnie z obowiązującymi przepisami o ochronie danych osobowych. Dane użytkownika mogą być przekazywane następującym odbiorcom:",


    "data-recipients-controllers": "Odrębni administratorzy danych lub współadministratorzy:",
    "data-recipients-controllers-postal": "Operatorzy pocztowi, kurierzy i dostawcy, w przypadku, gdy jest to niezbędne do realizacji dostawy do użytkownika;",
    "data-recipients-controllers-consulting": "Podmioty prowadzące działalność doradczą, audytową;",
    "data-recipients-controllers-payments": "Podmioty obsługujące płatności elektroniczne lub karty płatnicze w zakresie niezbędnym do obsługi płatności dokonywanych przez klienta, a także do obsługi ewentualnego zwrotu wpłaconych kwot (w przypadku odstąpienia od umowy zakupu). W szczególności przekazujemy informacje o kwocie płatności wybranemu dostawcy usług płatniczych;",
    "data-recipients-controllers-authorized": "Podmiotom lub instytucjom uprawnionym do ich uzyskania na podstawie obowiązującego prawa, np. organom ścigania w przypadku skierowania przez nie żądania udostępnienia danych, w oparciu o stosowną podstawę prawną (np. na potrzeby toczącego się postępowania karnego).",


    "data-recipients-processors": "Podmioty przetwarzające:",
    "data-recipients-processors-marketing": "wyspecjalizowani dostawcy usług w sektorze marketingu internetowego, którzy przetwarzają dane użytkownika (pseudonimizowane profile przy użyciu technologii plików cookie i tym podobnych) w naszym imieniu w celu komunikacji marketingowej w sieciach reklamowych;",
    "data-recipients-processors-it": "dostawcy usług zaopatrujący administratora w rozwiązania techniczne, informatyczne, umożliwiające funkcjonowanie sklepu internetowego i świadczonych za jego pośrednictwem usług (w szczególności dostawcom oprogramowania komputerowego, dostawcom poczty elektronicznej i dostawcom usług hostingowych);",
    "data-recipients-processors-logistics": "dostawcy usług zaopatrujących administratora w rozwiązania logistyczne;",
    "data-recipients-processors-other": "inne podmioty, jeżeli wynika to z ustaleń z Użytkownikiem.",
    
    "transfers-section": "§ 6",
    "transfers-title": "Przekazywanie danych do krajów trzecich",
    "transfers-intro": "Z wyjątkiem przypadków opisanych w Polityce, nie przekazujemy danych osobowych do odbiorców znajdujących się poza Unią Europejską lub Europejskim Obszarem Gospodarczym.",
    "transfers-detail": "Jeśli przekazujemy dane osobowe odbiorcom spoza Europejskiego Obszaru Gospodarczego (EOG), odbywa się to tylko wtedy, gdy Komisja Europejska potwierdziła odpowiedni poziom ochrony danych w tym kraju trzecim, odpowiedni poziom ochrony danych został uzgodniony z odbiorcą (np. przy użyciu standardowych klauzul umownych UE) lub jeśli uzyskaliśmy zgodę użytkownika.",
    
    "final-provisions-section": "§ 7",
    "final-provisions-title": "Postanowienia końcowe",
    "final-provisions-dude": "W przypadku jakichkolwiek pytań, zastrzeżeń lub wątpliwości dotyczących treści niniejszej Polityki lub sposobu przetwarzania przez nas danych osobowych, a także skarg dotyczących tych kwestii, prosimy o kontakt poprzez wiadomośc na adres email: hola@bodegasur.com.",
    "final-provisions-thankyou": "Ze swojej strony dziękujemy za okazane zaufanie i dołożymy wszelkich starań, aby dane były bezpieczne, a ich przetwarzanie odbywało się zgodnie z obowiązującymi przepisami prawa.",
    "final-provisions-effective-date":"Niniejsza polityka obowiązuje od dnia 10.10.2024 r. Bodega Sur z siedzibą w Krakowie zastrzega sobie prawo do wprowadzania niezbędnych zmian i aktualizacji niniejszej Polityki poprzez publikowanie nowych treści na naszej stronie internetowej. Po zmianie Polityka pojawi się na stronie internetowej z nową datą.",
    
    
    
    "back-to-home-button": "Wróć do strony głównej"

    // Continúa con más textos según sea necesario
};

// Cambia el idioma y guarda la selección en localStorage
function changeLanguage() {
    const language = document.getElementById("language").value;
    currentLanguage = language; // Actualiza el idioma actual
    localStorage.setItem("selectedLanguage", language); // Guarda el idioma seleccionado en localStorage
    console.log("Idioma guardado en localStorage:", language); // Verificar el idioma guardado

    if (language === "es") {
        loadTranslations(translationsEs);
    }
    if (language === "en") {
        loadTranslations(translationsEn);
       
    }
    if (language === "pl") {
        loadTranslations(translationsPl);
       
    }
    initializeProducts();  // Asegúrate de que esta función actualice las tarjetas correctamente en el idioma seleccionado
    // Añadir los botones de "Ordenar" y "Clean Order" al DOM
   
}

// Función para reemplazar los textos según el idioma seleccionado
function loadTranslations(translations) {
    //header
    document.getElementById("authenticFlavoursText").textContent = translations["authenticFlavours"];
    document.querySelector("a#optionProduct").textContent = translations["optionProduct"];
    document.querySelector("a#optionRestaurant").textContent = translations["optionRestaurant"];
    document.querySelector("a#optionAbout").textContent = translations["optionAbout"];
    document.querySelector("a#optionContact").textContent = translations["optionContact"];

    //sección footer
    document.querySelector("h5#followUs").textContent = translations["followUs"];
    document.querySelector("h5#shortCuts").textContent = translations["shortCuts"];
    document.querySelector("a#ourPruductsLinks").textContent = translations["ourPruductsLinks"];
    document.querySelector("a#forRestaurantsLinks").textContent = translations["forRestaurantsLinks"];
    document.querySelector("a#aboutUsLink").textContent = translations["aboutUsLink"];
    document.querySelector("a#contactLinks").textContent = translations["contactLinks"];
    document.querySelector("h5#usufulLinks").textContent = translations["usufulLinks"];
    document.querySelector("a#shippigInfoLinks").textContent = translations["shippigInfoLinks"];
    document.querySelector("a#policyLinks").textContent = translations["policyLinks"];

    //privacy policy section
    document.querySelector("h1#privacy-policy-title").textContent = translations["privacy-policy-title"];
    
    document.querySelector("h4#section-1").textContent = translations["section-1"];
    document.querySelector("h4#general-provisions").textContent = translations["general-provisions"];
    document.querySelector("p#general-provisions-text").textContent = translations["general-provisions-text"];
    document.querySelector("h4#personal-data-administrator-title").textContent = translations["personal-data-administrator-title"];
    document.querySelector("p#personal-data-administrator-text").textContent = translations["personal-data-administrator-text"];
    document.querySelector("h4#data-protection-inspector-title").textContent = translations["data-protection-inspector-title"];
    document.querySelector("p#data-protection-inspector-text").textContent = translations["data-protection-inspector-text"];
    
    document.querySelector("h4#section-2").textContent = translations["section-2"];
    document.querySelector("h4#rights-to-be-exercised-title").textContent = translations["rights-to-be-exercised-title"];
    document.querySelector("p#rights-to-be-exercised-text").textContent = translations["rights-to-be-exercised-text"];
    document.querySelector("p#response-period-text").textContent = translations["response-period-text"];
    document.querySelector("p#withdraw-consent-rights").textContent = translations["withdraw-consent-rights"];
    document.querySelector("p#complaint-rights-title").textContent = translations["complaint-rights-title"];
    document.querySelector("p#supervisory-authority-title").textContent = translations["supervisory-authority-title"];
    document.querySelector("p#supervisory-authority-address").textContent = translations["supervisory-authority-address"];
    document.querySelector("p#supervisory-authority-phone").textContent = translations["supervisory-authority-phone"];
    document.querySelector("p#other-authorities-title").textContent = translations["other-authorities-title"];
    document.querySelector("p#other-authorities-link").href = translations["other-authorities-link"];

    document.querySelector("h4#section-3").textContent = translations["section-3"];
    document.querySelector("h4#security-of-personal-data-title").textContent = translations["security-of-personal-data-title"];
    document.querySelector("p#security-of-personal-data-text").textContent = translations["security-of-personal-data-text"];
    document.querySelector("p#personal-data-access").textContent = translations["personal-data-access"];
    document.querySelector("p#personal-data-protection-efforts").textContent = translations["personal-data-protection-efforts"];
    

      
    document.querySelector("h4#section-4").textContent = translations["section-4"];
    document.querySelector("h4#information-clauses-title").textContent = translations["information-clauses-title"];
    
    document.querySelector("u#implementation-orders-title").textContent = translations["implementation-orders-title"];
    document.querySelector("p#data-processing-purpose-title").textContent = translations["data-processing-purpose-title"];
    document.querySelector("p#data-processing-legal-basis").textContent = translations["data-processing-legal-basis"];
    document.querySelector("p#data-recipients-title1").textContent = translations["data-recipients-title1"];
    document.querySelector("p#data-recipients-info").textContent = translations["data-recipients-info"];
    
    document.querySelector("p#data-processing-time-title").textContent = translations["data-processing-time-title"];
    document.querySelector("p#data-processing-time-desc").textContent = translations["data-processing-time-desc"];
    
    document.querySelector("p#your-rights-title").textContent = translations["your-rights-title"];
    document.querySelector("p#rights-access").textContent = translations["rights-access"];
    document.querySelector("p#obligation-to-provide-data-title").textContent = translations["obligation-to-provide-data-title"];
    document.querySelector("p#data-provision-obligation").textContent = translations["data-provision-obligation"];
    
    document.querySelector("u#participation-in-competitions-title").textContent = translations["participation-in-competitions-title"];
    document.querySelector("p#competition-data-processing-title").textContent = translations["competition-data-processing-title"];
    document.querySelector("p#competition-legal-basis").textContent = translations["competition-legal-basis"];
    document.querySelector("p#competition-recipients-title").textContent = translations["competition-recipients-title"];
    document.querySelector("p#competition-recipients-info").textContent = translations["competition-recipients-info"];
    document.querySelector("p#data-storage-period-title").textContent = translations["data-storage-period-title"];
    document.querySelector("p#data-storage-period-info").textContent = translations["data-storage-period-info"];
    document.querySelector("p#competition-rights-title").textContent = translations["competition-rights-title"];
    document.querySelector("p#competition-rights-info").textContent = translations["competition-rights-info"];
    document.querySelector("p#competition-data-provision-title").textContent = translations["competition-data-provision-title"];
    document.querySelector("p#competition-data-provision-info").textContent = translations["competition-data-provision-info"];
    
    document.querySelector("u#sending-newsletters-title").textContent = translations["sending-newsletters-title"];
    document.querySelector("p#newsletter-data-processing-title").textContent = translations["newsletter-data-processing-title"];
    document.querySelector("p#newsletter-legal-basis").textContent = translations["newsletter-legal-basis"];
    document.querySelector("p#newsletter-data-recipients-title").textContent = translations["newsletter-data-recipients-title"];
    document.querySelector("p#newsletter-data-recipients-info").textContent = translations["newsletter-data-recipients-info"];
    document.querySelector("p#newsletter-data-storage-period-title").textContent = translations["newsletter-data-storage-period-title"];
    document.querySelector("p#newsletter-data-storage-period-info").textContent = translations["newsletter-data-storage-period-info"];
    document.querySelector("p#newsletter-rights-title").textContent = translations["newsletter-rights-title"];
    document.querySelector("p#newsletter-rights-info").textContent = translations["newsletter-rights-info"];
    document.querySelector("p#newsletter-data-provision-title").textContent = translations["newsletter-data-provision-title"];
    document.querySelector("p#newsletter-data-provision-info").textContent = translations["newsletter-data-provision-info"];

   // Nuevas secciones para marketing
    document.querySelector("u#marketing-data-processing-title").textContent = translations["marketing-data-processing-title"];
    document.querySelector("#marketing-purpose").textContent = translations["marketing-purpose"];
    document.querySelector("#marketing-purpose-desc").textContent = translations["marketing-purpose-desc"];
    document.querySelector("#marketing-recipients").textContent = translations["marketing-recipients"];
    document.querySelector("#marketing-recipients-desc").textContent = translations["marketing-recipients-desc"];
    document.querySelector("#marketing-storage").textContent = translations["marketing-storage"];
    document.querySelector("#marketing-storage-desc").textContent = translations["marketing-storage-desc"];
    document.querySelector("#marketing-rights").textContent = translations["marketing-rights"];
    document.querySelector("#marketing-rights-desc").textContent = translations["marketing-rights-desc"];
    document.querySelector("#marketing-obligation").textContent = translations["marketing-obligation"];
    document.querySelector("#marketing-obligation-desc").textContent = translations["marketing-obligation-desc"];

    // Nuevas secciones para contacto
    document.querySelector("u#contact-form-chat-title").textContent = translations["contact-form-chat-title"];
    document.querySelector("#contact-purpose").textContent = translations["contact-purpose"];
    document.querySelector("#contact-purpose-desc").textContent = translations["contact-purpose-desc"];
    document.querySelector("#contact-recipients").textContent = translations["contact-recipients"];
    document.querySelector("#contact-recipients-desc").textContent = translations["contact-recipients-desc"];
    document.querySelector("#contact-storage").textContent = translations["contact-storage"];
    document.querySelector("#contact-storage-desc").textContent = translations["contact-storage-desc"];
    document.querySelector("#contact-rights").textContent = translations["contact-rights"];
    document.querySelector("#contact-rights-desc").textContent = translations["contact-rights-desc"];
    document.querySelector("#contact-obligation").textContent = translations["contact-obligation"];
    document.querySelector("#contact-obligation-desc").textContent = translations["contact-obligation-desc"];
    
    //Email contact
    document.querySelector("u#email-contact-title").textContent = translations["email-contact-title"];
    document.querySelector("#email-purpose").textContent = translations["email-purpose"];
    document.querySelector("#email-purpose-desc").textContent = translations["email-purpose-desc"];
    document.querySelector("#email-recipients").textContent = translations["email-recipients"];
    document.querySelector("#email-recipients-desc").textContent = translations["email-recipients-desc"];
    document.querySelector("#email-storage").textContent = translations["email-storage"];
    document.querySelector("#email-storage-desc").textContent = translations["email-storage-desc"];
    document.querySelector("#email-rights").textContent = translations["email-rights"];
    document.querySelector("#email-rights-desc").textContent = translations["email-rights-desc"];
    document.querySelector("#email-obligation").textContent = translations["email-obligation"];
    document.querySelector("#email-obligation-desc").textContent = translations["email-obligation-desc"];
    
         
    // Data recipients section
    document.querySelector("h4#data-recipients-section").textContent = translations["data-recipients-section"];
    document.querySelector("h4#data-recipients-title").textContent = translations["data-recipients-title"];
    document.querySelector("#data-recipients-intro").textContent = translations["data-recipients-intro"];
    document.querySelector("#data-recipients-controllers").textContent = translations["data-recipients-controllers"];
    document.querySelector("#data-recipients-controllers-postal").textContent = translations["data-recipients-controllers-postal"];
    document.querySelector("#data-recipients-controllers-consulting").textContent = translations["data-recipients-controllers-consulting"];
    document.querySelector("#data-recipients-controllers-payments").textContent = translations["data-recipients-controllers-payments"];
    document.querySelector("#data-recipients-controllers-authorized").textContent = translations["data-recipients-controllers-authorized"];
    document.querySelector("#data-recipients-processors").textContent = translations["data-recipients-processors"];
    document.querySelector("#data-recipients-processors-marketing").textContent = translations["data-recipients-processors-marketing"];
    document.querySelector("#data-recipients-processors-it").textContent = translations["data-recipients-processors-it"];
    document.querySelector("#data-recipients-processors-logistics").textContent = translations["data-recipients-processors-logistics"];
    document.querySelector("#data-recipients-processors-other").textContent = translations["data-recipients-processors-other"];

    // Transfers section
    document.querySelector("#transfers-section").textContent = translations["transfers-section"];
    document.querySelector("h4#transfers-title").textContent = translations["transfers-title"];
    document.querySelector("#transfers-intro").textContent = translations["transfers-intro"];
    document.querySelector("#transfers-detail").textContent = translations["transfers-detail"];

    // Final provisions section
    document.querySelector("h4#final-provisions-section").textContent = translations["final-provisions-section"];
    document.querySelector("h4#final-provisions-title").textContent = translations["final-provisions-title"];
    document.querySelector("#final-provisions-dude").textContent = translations["final-provisions-dude"];
    document.querySelector("#final-provisions-thankyou").textContent = translations["final-provisions-thankyou"];
    document.querySelector("#final-provisions-effective-date").textContent = translations["final-provisions-effective-date"];

    // Back to home button
    document.querySelector("#back-to-home-button").textContent = translations["back-to-home-button"];


    // Continúa reemplazando más textos según los elementos en tu página
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new MutationObserver(function(mutations) {
        const languageSelector = document.getElementById("language");
        const footerElement = document.getElementById("footer-container"); // Asegúrate de que el contenedor del footer esté cargado

        if (languageSelector && footerElement) {
            observer.disconnect(); // Deja de observar cuando ambos elementos están disponibles
            initializeLanguage(languageSelector); // Llama a la función de inicialización
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});

function initializeLanguage(languageSelector) {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "en";
    console.log("Idioma cargado desde localStorage: (initializeLanguage)", selectedLanguage);

    languageSelector.value = selectedLanguage;
    currentLanguage = selectedLanguage;

    if (selectedLanguage === "es") {
        loadTranslations(translationsEs);
    } else if (selectedLanguage === "en") {
        loadTranslations(translationsEn);
    } else if (selectedLanguage === "pl") {
        loadTranslations(translationsPl);
    }
}