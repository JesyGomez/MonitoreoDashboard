import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export default class DashboardComponent {
  isModalOpen = false; 
  isEditMode = false; 
  modalAction: 'create' | 'edit' = 'create'; 

  plantas: Array<{ pais: string; nombre: string; lecturas: number; alertasMedias: number; alertasRojas: number; }> = [
    { pais: 'Argentina', nombre: 'Planta A', lecturas: 150, alertasMedias: 3, alertasRojas: 1 },
    { pais: 'Brasil', nombre: 'Planta B', lecturas: 200, alertasMedias: 1, alertasRojas: 0 },
    { pais: 'Chile', nombre: 'Planta C', lecturas: 120, alertasMedias: 2, alertasRojas: 1 }
  ];

  selectedPlanta: { 
    nombre: string; 
    pais: string; 
    lecturas: number; 
    alertasMedias: number; 
    alertasRojas: number; 
} = {
    nombre: '',      
    pais: '',        
    lecturas: 0,          
    alertasMedias: 0,     
    alertasRojas: 0       
};

  // Método para mostrar el formulario de creación
  showCreatePlantForm() {
    this.isModalOpen = true;
    this.isEditMode = false;
    this.selectedPlanta = {
      nombre: '',
      pais: '',
      lecturas: 0,
      alertasMedias: 0,
      alertasRojas: 0
    };
      }

  editPlanta(planta: { nombre: string; pais: string; lecturas: number; alertasMedias: number; alertasRojas: number; }) {
    this.isModalOpen = true;
  this.isEditMode = true; 
  this.selectedPlanta = { ...planta }; // Carga los datos de la planta a editar
  }

  createPlanta() {
    if (this.selectedPlanta.nombre && this.selectedPlanta.pais) {
      this.plantas.push({ ...this.selectedPlanta }); 
      this.closeModal();
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  updatePlanta() {
    const index = this.plantas.findIndex(p => p.nombre === this.selectedPlanta.nombre);
    if (index !== -1) {
      this.plantas[index] = { ...this.selectedPlanta }; // Actualizar la planta
    }
    this.closeModal();
  }

  // Método para cancelar la creación o edición
  cancel() {
    this.closeModal();
  }

  openModal(action: 'create' | 'edit') {
    this.modalAction = action;
    this.isModalOpen = true; 
    if (action === 'edit') {
      // No se necesita cargar la planta ya que se hace en el método editPlanta
    } else {
      this.resetSelectedPlanta(); 
    }
  }

  closeModal() {
    this.isModalOpen = false; 
    this.resetForm(); // Reiniciar el formulario
  }

  // Método para reiniciar el formulario
  resetForm() {
    this.resetSelectedPlanta();
    this.isEditMode = false; 
  }

  private resetSelectedPlanta() {
    this.selectedPlanta = { nombre: '', pais: '', lecturas: 0, alertasMedias: 0, alertasRojas: 0 };
  }

  agregarPlanta(event: Event) {
    event.preventDefault();
    this.isEditMode ? this.updatePlanta() : this.createPlanta();
  }

  editarPlanta(event: Event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const index = this.plantas.findIndex(p => p.nombre === this.selectedPlanta.nombre);
    if (index !== -1) {
        this.plantas[index] = { ...this.selectedPlanta };
    }
    this.closeModal(); // Cerramos el modal después de actualizar
  }
}
