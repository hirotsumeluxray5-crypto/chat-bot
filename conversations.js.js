menu: {
    text: "choisissez le sujet de votre demande :",
    option: [
        {
            text: "commande et paiement",
            next: "commande_menu"
        },
        {
            text: "livraison / retrait",
            next: "livraison_menu"
        },
        {
            text: "remboursement / garantie / retour",
            next: "remboursement_menu"
        }
    ]
},

// commande et paiment 
commande_menu: {
    text: "quel probleme rencontrez-vous avec votre commande ou votre paiement ?",
    option: [
        {
            text: "credit valide correspondant non presente",
            next: "credit_valide_non_present"
        },
        {
            text: "paiement revoque",
            next: "paiement_revoque"
        },
        {
            text: "remboursement decline (numero de serie)",
            next: "remboursement_decline_serie"
        },
        {
            text: "prelevement effectue deux fois",
            next: "prelevement_double"
        },
        {
            text: "retour au menu principal",
            next: "menu"
        }
    ]
},

credit_valide_non_present: {
    text: "vous indiquer qu un credit valide correspondant a votre achat n est pas presente. verifiez les moyen de paiement et le detail de la transaction. si le probleme persiste contactez le service client avec votre justificatif de paiement.",
    next: "reponse_commande"
},

paiement_revoque: {
    text: "votre paiement apparait comme revoque. verifiez le statut de la transaction aupres de votre banque et dans le suivi de votre commande. si le statut reste incoherent contactez le service client avec la reference de commande.",
    next: "reponse_commande"
},

remboursement_decline_serie: {
    text: "le remboursement est decline lors de la verification du numero de serie. verifiez que le numero communique correspond bien au produit concerne. si le refus persiste contactez le service client avec votre numero de commande et le numero de serie.",
    next: "reponse_commande"
},

prelevement_double: {
    text: "vous constatez deux prelevements pour une meme commande. verifiez si les deux operations sont bien comptabilisees et non simplement en attente. Si les deux prelevements sont confirmes contactez le service client avec les justificatifs des transactions.",
    next: "reponse_commande"
},

reponse_commande: {
    text: "voici les premieres verifications a effectuer pour votre demande de commande ou de paiement. Conservez votre numero de commande et vos justificatifs afin de faciliter le traitement de votre dossier.",
    next: "aide_resolu"
},

// livraison et retrait
livraison_menu: {
    text: "quelle situation correspond a votre probleme de livraison ou de retrait ?",
    option: [
        {
            text: "commande non recue",
            next: "commande_non_recue"
        },
        {
            text: "colis depose trop loin",
            next: "colis_depose_trop_loin"
        },
        {
            text: "livraison correcte",
            next: "livraison_correcte"
        },
        {
            text: "retour au menu principal",
            next: "menu"
        }
    ]
},

commande_non_recue: {
    text: "vous n avez pas recu votre commande. consultez le suivi de livraison et verifiez l'adresse de livraison ainsi que les eventuelles notifications du transporteur. si le colis reste introuvable contactez le service client avec votre numero de commande.",
    next: "reponse_livraison"
},

colis_depose_trop_loin: {
    text: "votre colis a ete depose dans un lieu trop eloigne. consultez les information du transporteur pour identifier le lieu exact de depot. Si ce lieu ne vous convient pas ou si vous ne pouvez pas recuperer le colis contactez le service client avec les informations de suivi.",
    next: "reponse_livraison"
},

livraison_correcte: {
    text: "si le suivi indique une livraison correcte et que vous avez bien recu votre colis aucune demarche supplementaire n est necessaire. Si vous constatez malgre tout un probleme revenez au menu Livraison / retrait.",
    next: "aide_resolue"
},

reponse_livraison: {
    text: "vous pouvez consulter le suivi de livraison a partir des informations de votre commande. Gardez votre numero de commande et le numero de suivi a disposition pour toute demande aupres du service client.",
    next: "aide_resolu"
},

// remboursement grantie retours
remboursement_menu: {
    text: "quel probleme rencontrez-vous ?",
    option: [
        {
            text: "remboursement sans numero de commande",
            next: "remboursement_sans_numero"
        },
        {
            text: "credit valide - commande non presentee",
            next: "credit_valide_commande_non_presentee"
        },
        {
            text: "materiel defectueux apres un an",
            next: "materiel_defectueux_apres_un_an"
        },
        {
            text: "retour au menu principal",
            next: "menu"
        }
    ]
},

remboursement_sans_numero: {
    text: "vous souhaitez effectuer un remboursement mais vous ne disposez pas du numero de commande. Recherchez l e-mail de confirmation d'achat ou tout justificatif permettant d identifier la transaction. si vous ne retrouvez pas la commande contactez le service client avec les informations dont vous disposez.",
    next: "reponse_remboursement"
},

credit_valide_commande_non_presentee: {
    text: "vous indiquez qu'un credit valide est associe a une commande qui n'est pas presentee. Verifiez le statut de la commande et le detail de la transaction. si les informations ne correspondent pas contactez le service client avec votre justificatif de paiement.",
    next: "reponse_remboursement"
},

materiel_defectueux_apres_un_an: {
    text: "votre materiel est defectueux apres un an. Preparez la preuve d'achat la reference du produit et une description precise de la panne. Contactez le service client afin de faire verifier les condition de prise en charge applicables a votre produit.",
    next: "reponse_remboursement"
},

reponse_remboursement: {
    text: "pour faciliter le suivi de votre demande conservez votre preuve d'achat votre numero de commande si vous l'avez ainsi que les informations concernant le produit.",
    next: "aide_resolu"
},

// fin commune
aide_resolu: {
    text: "cela vous a-t-il aide ?",
    option: [
        {
            text: "Oui",
            next: "code_retrait"
        },
        {
            text: "Non",
            next: "contacter_service_client"
        }
    ]
},

code_retrait: {
    text: "avez-vous un code de retrait ?",
    option: [
        {
            text: "Oui",
            next: "retour_menu"
        },
        {
            text: "Non",
            next: "contacter_service_client"
        }
    ]
},

retour_menu: {
    text: "retour au menu.",
    next: "assistant_micromania"
},

assistant_micromania: {
    text: "micromania assistant : que souhaitez-vous faire ?",
    next: "menu"
},

contacter_service_client: {
    text: "nous vous invitons a contacter le service client micromania pour obtenir une aide personnalisee. Preparez votre numero de commande votre preuve d'achat et les elements utiles a votre demande.",
    option: [
        {
            text: "revenir au menu principal",
            next: "menu"
        }
    ]
}
