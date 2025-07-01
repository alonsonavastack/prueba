import { Component } from '@angular/core';

@Component({
  selector: 'app-precios',
  imports: [],
  templateUrl: './precios.html',
})
export class Precios {
  // Planes
  plans = [
    {
      name: 'Básico',
      speed: '6 Mb/s',
      storage: '15 GB',
      price: 'Gratis',
      features: [
        'Acceso básico',
        'Soporte por correo',
        'Actualizaciones mensuales',
      ],
    },
    {
      name: 'Profesional',
      speed: '25 Mb/s',
      storage: '25 GB',
      price: '$24/mes',
      features: [
        'Todo en Básico',
        'Soporte prioritario',
        'Actualizaciones semanales',
        'Acceso a beta',
      ],
    },
    {
      name: 'Negocios',
      speed: '36 Mb/s',
      storage: '40 GB',
      price: '$50/mes',
      features: [
        'Todo en Profesional',
        'Soporte 24/7',
        'Actualizaciones diarias',
        'API acceso',
        'Dashboard avanzado',
      ],
    },
    {
      name: 'Exclusivo',
      speed: '48 Mb/s',
      storage: '120 GB',
      price: '$72/mes',
      features: [
        'Todo en Negocios',
        'Consultoría personalizada',
        'Servidor dedicado',
        'Migración asistida',
        'SLA 99.9%',
      ],
    },
  ];

  // Textos descriptivos
  pageTitle = 'Nuestros Planes de Suscripción';
  pageDescription =
    'Elige el plan que mejor se adapte a tus necesidades. Todos nuestros planes incluyen garantía de satisfacción.';
  subscribeButtonText = 'Seleccionar Plan';

  showModal = false;
  selectedPlanName = '';

  ngOnInit(): void {
    console.log(this.showModal)
  }

  selectPlan(planName: string) {
    this.selectedPlanName = planName;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }


}
