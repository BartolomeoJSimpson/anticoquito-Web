const areas = ["Salud", "Finanzas", "Carrera", "Familia", "Amigos", "Diversión", "Desarrollo Personal", "Espiritualidad"];
        const slidersDiv = document.getElementById("sliders");
        
        areas.forEach(area => {
            const div = document.createElement("div");
            div.classList.add("slider-container");
            div.innerHTML = `
                <label>${area}:</label>
                <input type="range" min="1" max="10" value="5" class="slider" id="${area}">
                <span class="value">5</span>
            `;
            slidersDiv.appendChild(div);
        });
        
        document.querySelectorAll(".slider").forEach(slider => {
            slider.addEventListener("input", function() {
                this.nextElementSibling.textContent = this.value;
            });
        });
        
        document.getElementById("lifeWheelForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let total = 0;
            document.querySelectorAll(".slider").forEach(slider => {
                total += parseInt(slider.value);
            });
            const avg = (total / areas.length).toFixed(2);
            document.getElementById("averageResult").textContent = `Promedio de satisfacción: ${avg}/10`;
            
            // Agregar evaluación a la tabla
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const email = document.getElementById("email").value;
            const table = document.getElementById("evaluationsTable");
            const newRow = table.insertRow();
            newRow.innerHTML = `<td>${name}</td><td>${age}</td><td>${email}</td><td>${avg}</td>`;
        });