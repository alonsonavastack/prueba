import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html'
})
export class Testimonial {
  testimonials = [
    {
      id: 1,
      quote: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      author: "Holden Caulfield",
      role: "UI DEVELOPER",
      rating: 5, // 1-5 estrellas
      image: "https://dummyimage.com/106x106"
    },
    {
      id: 2,
      quote: "Este producto ha cambiado completamente mi flujo de trabajo. La calidad es excepcional y el soporte al cliente es increíble.",
      author: "Alper Kamu",
      role: "DESIGNER",
      rating: 4,
      image: "https://dummyimage.com/107x107"
    },
    {
      id: 3,
      quote: "Buena relación calidad-precio, aunque hay algunas características que podrían mejorarse en futuras actualizaciones.",
      author: "Maria Garcia",
      role: "MARKETING MANAGER",
      rating: 3,
      image: "https://dummyimage.com/108x108"
    }
  ];

  getRatingColor(rating: number): string {
    return `border-l-4 ${this.getRatingBorderColor(rating)}`;
  }

  private getRatingBorderColor(rating: number): string {
    switch(rating) {
      case 5:
        return 'border-lime-400'; // Excelente - verde lima
      case 4:
        return 'border-blue-400'; // Muy bueno - azul
      case 3:
        return 'border-yellow-400'; // Bueno - amarillo
      case 2:
        return 'border-orange-400'; // Regular - naranja
      case 1:
        return 'border-red-400'; // Malo - rojo
      default:
        return 'border-gray-400'; // Sin rating - gris
    }
  }
}
