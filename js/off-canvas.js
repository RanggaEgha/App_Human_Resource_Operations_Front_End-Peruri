(function($) {
    'use strict';
    $(function() {
        $('[data-bs-toggle="offcanvas"]').on("click", function() {
            $('.sidebar-offcanvas').toggleClass('active')
        });
    });
})(jQuery);

function tampilkanData() {
    const bulan = document.getElementById("bulanFilter").value;
    const tahun = document.getElementById("tahunFilter").value;
    if (bulan && tahun) {
        alert(`Menampilkan data untuk bulan ${bulan} tahun ${tahun}`);
        // Implementasikan logika untuk menampilkan data berdasarkan bulan dan tahun
    } else {
        alert("Silakan pilih Bulan dan Tahun terlebih dahulu.");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const menuTable = document.getElementById('menuTable').getElementsByTagName('tbody')[0];
    const entriesSelect = document.getElementById('entriesSelect');
    const pagination = document.querySelector('.pagination');

    // Fungsi untuk Menyaring Baris Tabel Berdasarkan Pencarian
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const rows = menuTable.getElementsByTagName('tr');
        let visibleCount = 0;

        for (let i = 0; i < rows.length; i++) {
            const menuCell = rows[i].getElementsByTagName('td')[1];
            if (menuCell) {
                const txtValue = menuCell.textContent || menuCell.innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    rows[i].style.display = "";
                    visibleCount++;
                } else {
                    rows[i].style.display = "none";
                }
            }
        }

        // Update Teks "Showing X to Y of Z entries"
        const totalEntries = rows.length;
        const shownEntries = visibleCount;
        const showingText = `Showing 1 to ${shownEntries} of ${totalEntries} entries`;
        document.getElementById('showingText').textContent = showingText;

    });

    // Fungsi untuk Mengubah Jumlah Entri yang Ditampilkan
    entriesSelect.addEventListener('change', function() {
        const selectedValue = parseInt(entriesSelect.value);
        const rows = Array.from(menuTable.getElementsByTagName('tr'));

        // Reset tampilan semua baris
        rows.forEach(row => row.style.display = "");

        // Tentukan berapa banyak baris yang akan ditampilkan
        const totalEntries = rows.length;
        const entriesToShow = selectedValue;
        let shownEntries = 0;

        for (let i = 0; i < totalEntries; i++) {
            if (shownEntries < entriesToShow) {
                rows[i].style.display = "";
                shownEntries++;
            } else {
                rows[i].style.display = "none";
            }
        }

        // Update Teks "Showing X to Y of Z entries"
        const showingText = `Showing 1 to ${shownEntries} of ${totalEntries} entries`;
        document.getElementById('showingText').textContent = showingText;


        // Reset Paginasi
        const pageItems = pagination.querySelectorAll('.page-item');
        pageItems.forEach(item => item.classList.remove('active'));
        if (pageItems.length > 1) {
            pageItems[1].classList.add('active'); // Set halaman 1 sebagai aktif
        }
    });

    // Inisialisasi Tampilan Awal
    function initialize() {
        entriesSelect.dispatchEvent(new Event('change'));
    }

    initialize();
});

document.addEventListener('DOMContentLoaded', function() {
    // Prefix unik untuk halaman ini
    const prdSearchInput = document.getElementById('prdSearchInput');
    const prdEntriesSelect = document.getElementById('prdEntriesSelect');
    const prdTable = document.getElementById('prdTable');
    const prdTbody = prdTable.getElementsByTagName('tbody')[0];
    const prdRows = Array.from(prdTbody.getElementsByTagName('tr'));

    let prdCurrentFilter = '';
    let prdCurrentEntries = parseInt(prdEntriesSelect.value);

    // Fungsi untuk menampilkan baris berdasarkan filter dan entries
    function prdFilterAndDisplayRows() {
        const filter = prdCurrentFilter.toLowerCase();
        let visibleCount = 0;

        prdRows.forEach(row => {
            const cells = row.getElementsByTagName('td');
            let match = false;

            // Cek kecocokan di setiap sel kecuali kolom Action
            for (let i = 0; i < cells.length - 1; i++) {
                const cellText = cells[i].textContent.toLowerCase();
                if (cellText.includes(filter)) {
                    match = true;
                    break;
                }
            }

            if (match) {
                if (visibleCount < prdCurrentEntries) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            } else {
                row.style.display = 'none';
            }
        });

        // Jika tidak ada yang tampil, tampilkan pesan "Tidak ditemukan data yang cocok"
        if (visibleCount === 0) {
            let prdNoDataRow = prdTbody.querySelector('.prd-no-data');
            if (!prdNoDataRow) {
                prdNoDataRow = document.createElement('tr');
                prdNoDataRow.classList.add('prd-no-data');
                const prdNoDataCell = document.createElement('td');
                prdNoDataCell.colSpan = prdTable.querySelectorAll('th').length;
                prdNoDataCell.classList.add('text-center');
                prdNoDataCell.textContent = 'Tidak ditemukan data yang cocok';
                prdNoDataRow.appendChild(prdNoDataCell);
                prdTbody.appendChild(prdNoDataRow);
            }
        } else {
            const existingPrdNoData = prdTbody.querySelector('.prd-no-data');
            if (existingPrdNoData) {
                prdTbody.removeChild(existingPrdNoData);
            }
        }
    }

    // Event listener untuk pencarian
    prdSearchInput.addEventListener('keyup', function() {
        prdCurrentFilter = prdSearchInput.value;
        prdFilterAndDisplayRows();
    });

    // Event listener untuk Show Entries
    prdEntriesSelect.addEventListener('change', function() {
        prdCurrentEntries = parseInt(prdEntriesSelect.value);
        prdFilterAndDisplayRows();
    });

    // Inisialisasi tampilan awal
    prdFilterAndDisplayRows();
});

function filterByDate() {
    const selectedDate = document.getElementById("dateFilter").value;
    if (selectedDate) {
        // Logika filter berdasarkan tanggal di sini
        console.log("Filtering data by date:", selectedDate);

        // Misalnya, menampilkan notifikasi sementara (bisa diubah ke logika filter sebenarnya)
        alert(`Data filtered for date: ${selectedDate}`);

        // Kode tambahan di sini untuk memperbarui tampilan data berdasarkan selectedDate
    } else {
        alert("Please select a date to filter!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("plsSearchInput");
    const entriesSelect = document.getElementById("plsEntriesSelect");
    const table = document.getElementById("plsTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("plsShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Showing 1 to ${visibleRows} of ${rows.length} entries`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Showing 1 to ${Math.min(visibleRows, entries)} of ${visibleRows} entries`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("plsSearchInput");
    const entriesSelect = document.getElementById("plsEntriesSelect");
    const table = document.getElementById("plsTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("plsShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Showing 1 to ${visibleRows} of ${rows.length} entries`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Showing 1 to ${Math.min(visibleRows, entries)} of ${visibleRows} entries`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("airSearchInput");
    const entriesSelect = document.getElementById("airEntriesSelect");
    const table = document.getElementById("airTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("airShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Showing 1 to ${visibleRows} of ${rows.length} entries`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Showing 1 to ${Math.min(visibleRows, entries)} of ${visibleRows} entries`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("creditSearchInput");
    const entriesSelect = document.getElementById("creditEntriesSelect");
    const table = document.getElementById("creditTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("creditShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Showing 1 to ${visibleRows} of ${rows.length} entries`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Showing 1 to ${Math.min(visibleRows, entries)} of ${visibleRows} entries`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("ktgrSearchInput");
    const entriesSelect = document.getElementById("ktgrEntriesSelect");
    const table = document.getElementById("ktgrTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("ktgrShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Showing 1 to ${visibleRows} of ${rows.length} entries`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Showing 1 to ${Math.min(visibleRows, entries)} of ${visibleRows} entries`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("rppSearchInput");
    const entriesSelect = document.getElementById("rppEntriesSelect");
    const table = document.getElementById("rppTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("rppShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Menampilkan 1 hingga ${visibleRows} dari ${rows.length} entri`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Menampilkan 1 hingga ${Math.min(visibleRows, entries)} dari ${visibleRows} entri yang ditemukan`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("rpaSearchInput");
    const entriesSelect = document.getElementById("rpaEntriesSelect");
    const table = document.getElementById("rpaTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("rpaShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Menampilkan 1 hingga ${visibleRows} dari ${rows.length} entri`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Menampilkan 1 hingga ${Math.min(visibleRows, entries)} dari ${visibleRows} entri yang ditemukan`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("rpcSearchInput");
    const entriesSelect = document.getElementById("rpcEntriesSelect");
    const table = document.getElementById("rpcTable").getElementsByTagName("tbody")[0];
    const rows = Array.from(table.getElementsByTagName("tr"));
    const showingText = document.getElementById("rpcShowingText");

    // Fungsi untuk menampilkan baris sesuai jumlah entri yang dipilih
    function showEntries() {
        const entries = parseInt(entriesSelect.value, 10);
        let visibleRows = 0;

        rows.forEach((row, index) => {
            if (index < entries) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        showingText.innerText = `Menampilkan 1 hingga ${visibleRows} dari ${rows.length} entri`;
    }

    // Fungsi untuk melakukan pencarian
    function searchTable() {
        const query = searchInput.value.toLowerCase();
        let visibleRows = 0;

        rows.forEach(row => {
            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(query)) {
                row.style.display = "";
                visibleRows++;
            } else {
                row.style.display = "none";
            }
        });

        const entries = parseInt(entriesSelect.value, 10);
        showingText.innerText = `Menampilkan 1 hingga ${Math.min(visibleRows, entries)} dari ${visibleRows} entri yang ditemukan`;
    }

    // Event listener untuk pencarian
    searchInput.addEventListener("input", searchTable);

    // Event listener untuk pemilihan jumlah entri yang ditampilkan
    entriesSelect.addEventListener("change", function() {
        showEntries();
        searchTable(); // Menampilkan hasil pencarian yang sesuai dengan jumlah entri yang dipilih
    });

    // Inisialisasi tampilan awal
    showEntries();
});