
// RAM
function compareRAM() {
    const ramSpecs = [
        {
            Tên: "Corsair Dominator Titanium Black 64GB (2x32GB) RGB 6600 DDR5",
            Loại: "DDR5",
            Dung_lượng: "64GB",
            Tốc_độ: "6600 MT/s",
            Màu: "Black",
            Hãng_sản_xuất: "Corsair"
        },
        {
            Tên: "G.Skill Trident Z RGB Royal Elite Silver 2x8GB 3600",
            Loại: "DDR4",
            Dung_lượng: "16GB",
            Tốc_độ: "3600MHz",
            Màu: "Silver",
            Hãng_sản_xuất: "G.SKILL"
        },
        {
            Tên: "GIGABYTE Aorus Memory 32GB (2x16GB) 5200 DDR5",
            Loại: "DDR5",
            Dung_lượng: "32GB",
            Tốc_độ: "5200MHz",
            Màu: "AORUS Grey",
            Hãng_sản_xuất: "Gigabyte"
        },
        {
            Tên: "Kingston Fury Beast RGB 32GB (2x16GB) bus 5600 DDR5",
            Loại: "DDR5",
            Dung_lượng: "32GB",
            Tốc_độ: "5600MT/s",
            Màu: "Black",
            Hãng_sản_xuất: "Kingston"
        },
        {
            Tên: "PNY XLR8 MAKO 2x16GB 6000 RGB White D5",
            Loại: "DDR5",
            Dung_lượng: "32GB",
            Tốc_độ: "6000MT/s",
            Màu: "White",
            Hãng_sản_xuất: "PNY"
        }
    ];

    let comparisonTable = '<table  align="center" width="60%" border="1px" cellspacing="1"><tr><th>Tên</th><th>Loại</th><th>Dung_lượng</th><th>Tốc_độ</th><th>Màu</th><th>Hãng_sản_xuất</th></tr>';

    ramSpecs.forEach(ram => {
        comparisonTable += `<tr>
            <td>${ram.Tên}</td>
            <td>${ram.Loại}</td>
            <td>${ram.Dung_lượng}</td>
            <td>${ram.Tốc_độ}</td>
            <td>${ram.Màu}</td>
            <td>${ram.Hãng_sản_xuất}</td>
        </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end RAM

// CPU
function compareCPU() {
    const cpuSpecs = [
        {
            Tên: "AMD Ryzen 5 5500GT",
            Nhân: 6,
            Luồng: 12,
            baseClock: "3.6GHz",
            turboClock: "4.4GHz",
            Hãng_sản_xuất: "AMD"
        },
        {
            Tên: "AMD Ryzen 7 5700X3D",
            Nhân: 8,
            Luồng: 16,
            baseClock: "3.0GHz",
            turboClock: "4.1GHz",
            Hãng_sản_xuất: "AMD"
        },
        {
            Tên: "Intel Core i3 14100",
            Nhân: 4,
            Luồng: 8,
            baseClock: "3.5GHz",
            turboClock: "4.7GHz",
            Hãng_sản_xuất: "Intel"
        },
        {
            Tên: "Intel Core i5 14400F",
            Nhân: 10,
            Luồng: 16,
            baseClock: "3.5GHz",
            turboClock: "4.7GHz",
            Hãng_sản_xuất: "Intel"
        },
        {
            Tên: "Intel Core i7 14700F",
            Nhân: 20,
            Luồng: 28,
            baseClock: "Not specified",
            turboClock: "5.3GHz",
            Hãng_sản_xuất: "Intel"
        },
        {
            Tên: "Intel Core i9 14900F",
            Nhân: 24,
            Luồng: 32,
            baseClock: "Not specified",
            turboClock: "5.8GHz",
            Hãng_sản_xuất: "Intel"
        }
    ];

    let comparisonTable = '<table  align="center" width="60%" border="1px" cellspacing="1"><tr><th>Tên</th><th>Nhân</th><th>Luồng</th><th>Base Clock</th><th>Turbo Clock</th><th>Hãng_sản_xuất</th></tr>';

    cpuSpecs.forEach(cpu => {
        comparisonTable += `<tr>
            <td>${cpu.Tên}</td>
            <td>${cpu.Nhân}</td>
            <td>${cpu.Luồng}</td>
            <td>${cpu.baseClock}</td>
            <td>${cpu.turboClock}</td>
            <td>${cpu.Hãng_sản_xuất}</td>
        </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end CPU

// ổ cứng
function compareStorage() {
    const storageSpecs = [
        {
            Tên: "Western Digital Ultrastar DC HC550 18TB",
            Loại: "HDD",
            Dung_lượng: "18TB",
            Tốc_độ: "7200RPM",
            interface: "SATA III",
            Hãng_sản_xuất: "Western Digital"
        },
        {
            Tên: "Seagate IronWolf 4TB",
            Loại: "HDD",
            Dung_lượng: "4TB",
            Tốc_độ: "5900RPM",
            interface: "SATA 3",
            Hãng_sản_xuất: "Seagate"
        },
        {
            Tên: "Corsair MP600 CORE XT 2TB",
            Loại: "SSD",
            Dung_lượng: "2TB",
            Tốc_độ: "5000MB/s",
            interface: "PCIe Gen 4.0 x4",
            Hãng_sản_xuất: "Corsair"
        },
        {
            Tên: "Kingston KC3000 1TB",
            Loại: "SSD",
            Dung_lượng: "1TB",
            Tốc_độ: "7000/6000MB/s",
            interface: "NVMe PCIe 4.0",
            Hãng_sản_xuất: "Kingston"
        },
        {
            Tên: "MSI SPATIUM M480 1TB",
            Loại: "SSD",
            Dung_lượng: "1TB",
            Tốc_độ: "7000MB/s",
            interface: "PCIe Gen4x4",
            Hãng_sản_xuất: "MSI"
        }
    ];

    let comparisonTable = '<table align="center" width="60%" border="1px" cellspacing="1"><tr><th>Tên</th><th>Loại</th><th>Dung_lượng</th><th>Tốc_độ</th><th>Interface</th><th>Hãng_sản_xuất</th></tr>';

    storageSpecs.forEach(storage => {
        comparisonTable += `<tr>
            <td>${storage.Tên}</td>
            <td>${storage.Loại}</td>
            <td>${storage.Dung_lượng}</td>
            <td>${storage.Tốc_độ}</td>
            <td>${storage.interface}</td>
            <td>${storage.Hãng_sản_xuất}</td>
        </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end ổ cứng

// Bộ nguồn
function comparePowerSupplies() {
    const powerSupplies = [
        {
            Tên: "Corsair HX1500i",
            Công_suất: "1500W",
            Modular: "Full Modular",
            Chứng_nhận: "80 Plus Platinum",
            Bảo_vệ: "ATX 12V 3.0"
        },
        {
            Tên: "Corsair RM750e",
            Công_suất: "750W",
            Modular: "Full Modular",
            Chứng_nhận: "80 Plus Gold",
            Bảo_vệ: "Cables ATX12V"
        },
        {
            Tên: "Antec META V450",
            Công_suất: "450W",
            Modular: "Non-Modular",
            Chứng_nhận: "OVP, OCP, SCP, NLO",
            Bảo_vệ: "Compliance with Intel ATX12 Ver2.31 standards"
        },
        {
            Tên: "1st Player FK PS-500FK (500W)",
            Công_suất: "500W",
            Modular: "Non-Modular",
            Chứng_nhận: "None 80+",
            Bảo_vệ: "UVP, OVP, OPP, SCP, Lightning Protection"
        },
        {
            Tên: "ASUS ROG Thor 1200P2 (1200W)",
            Công_suất: "1200W",
            Modular: "Full Modular",
            Chứng_nhận: "80 Plus Platinum",
            Bảo_vệ: "OPP, OVP, UVP, SCP, OCP, OTP"
        }
    ];

    let comparisonTable = '<table align="center" width="60%" border="1px" cellspacing="1"><tr><th>Tên</th><th>Công_suất</th><th>Modular</th><th>Chứng_nhận</th><th>Bảo_vệ</th></tr>';

    powerSupplies.forEach(psu => {
        comparisonTable += `<tr>
            <td>${psu.Tên}</td>
            <td>${psu.Công_suất}</td>
            <td>${psu.Modular}</td>
            <td>${psu.Chứng_nhận}</td>
            <td>${psu.Bảo_vệ}</td>
        </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end bộ nguồn

//Card đồ họa
function compareGraphicsCards() {
    const graphicsCards = [
        {
            Tên: "ASUS TUF Gaming GeForce RTX 4070 Ti SUPER BTF White OC Edition 16GB GDDR6X (TUF-RTX4070TIS-O16G-BTF-WHITE)",
            Hãng_sản_xuất: "ASUS",
            Nhân_đồ_họa: "NVIDIA® GeForce RTX™ 4070 Ti SUPER",
            Xung_nhịp: "Chế độ OC: 2670 MHz, Chế độ mặc định: 2640 MHz (boost)",
            Bộ_nhớ_Video: "16GB GDDR6X",
            Độ_phân_giải: "7680 x 4320",
        },
        {
            Tên: "ASUS GeForce RTX 4080 SUPER 16GB GDDR6X Noctua OC Edition (RTX4080S-O16G-NOCTUA)",
            Hãng_sản_xuất: "ASUS",
            Nhân_đồ_họa: "NVIDIA® GeForce RTX™ 4080 SUPER",
            Xung_nhịp: "Chế độ OC: 2640 MHz, Chế độ mặc định: 2610 MHz (boost)",
            Bộ_nhớ_Video: "16GB GDDR6X",
            Độ_phân_giải: "7680 x 4320",
        },
        {
            Tên: "GIGABYTE AORUS GeForce RTX 4080 XTREME WATERFORCE WB 16G",
            Hãng_sản_xuất: "GIGABYTE",
            Nhân_đồ_họa: "NVIDIA® GeForce RTX™ 4080",
            Xung_nhịp: "Tăng tốc: 2625 MHz",
            Bộ_nhớ_Video: "16GB GDDR6X",
            Độ_phân_giải: "7680 x 4320",
        },
        {
            Tên: "MSI GeForce RTX 4080 SUPER 16G SUPRIM X",
            Hãng_sản_xuất: "MSI",
            Nhân_đồ_họa: "NVIDIA® GeForce RTX™ 4080 SUPER",
            Xung_nhịp: "Tăng tốc: 2640 MHz",
            Bộ_nhớ_Video: "16GB GDDR6X",
            Độ_phân_giải: "7680 x 4320",
        },
        {
            Tên: "Palit GeForce GT 1030 2GB DDR4",
            Hãng_sản_xuất: "PALIT",
            Nhân_đồ_họa: "NVIDIA® GeForce GT 1030",
            Xung_nhịp: "1151 MHz, Boost Clock: 1379 MHz",
            Bộ_nhớ_Video: "2GB DDR4",
            Độ_phân_giải: "4096 x 2160",
        }
    ];

    let comparisonTable = '<table align="center" width="80%" border="1" cellspacing="1"><tr><th>Tên</th><th>Hãng_sản_xuất</th><th>Nhân_đồ_họa</th><th>Xung_nhịp</th><th>Bộ_nhớ_Video</th><th>Độ_phân_giải</th></tr>';

    graphicsCards.forEach(card => {
        comparisonTable += `<tr>
            <td>${card.Tên}</td>
            <td>${card.Hãng_sản_xuất}</td>
            <td>${card.Nhân_đồ_họa}</td>
            <td>${card.Xung_nhịp}</td>
            <td>${card.Bộ_nhớ_Video}</td>
            <td>${card.Độ_phân_giải}</td>
            </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end Card đồ họa

// Mainboard
function compareMainboards() {
    const mainboards = [
        {
            Tên: "ASUS TUF GAMING Z790-BTF WIFI DDR5",
            CPU: "Intel LGA1700",
            Chipset: "Intel Z790",
            Bộ_nhớ: "DDR5, Tối đa 192GB",
            Khe_mở_rộng: "PCIe 5.0 x16, PCIe 4.0 x16, PCIe 4.0 x4"
        },
        {
            Tên: "MSI MPG Z790 EDGE TI MAX WIFI DDR5",
            CPU: "Intel LGA1700",
            Chipset: "Intel Z790",
            Bộ_nhớ: "DDR5, Tối đa 256GB",
            Khe_mở_rộng: "PCIe 5.0 x16, PCIe 4.0 x16, PCIe 4.0 x4"
        },
        {
            Tên: "GIGABYTE Z790 AORUS XTREME X ICE",
            CPU: "Intel LGA1700",
            Chipset: "Intel Z790",
            Bộ_nhớ: "DDR5, Tối đa 192GB",
            Khe_mở_rộng: "PCIe 5.0 x16, PCIe 4.0 x16, PCIe 4.0 x4"
        },
        {
            Tên: "Colorful CVN B760M FROZEN WIFI D5 V20",
            CPU: "Intel LGA1700",
            Chipset: "Intel B760",
            Bộ_nhớ: "DDR5, Tối đa 192GB",
            Khe_mở_rộng: "PCIe 5.0 x16, PCIe 4.0 x16, PCIe 4.0 x4"
        }
    ];

    let comparisonTable = '<table align="center" width="60%" border="1px" cellspacing="1"><tr><th>Tên</th><th>CPU</th><th>Chipset</th><th>Bộ nhớ</th><th>Khe mở rộng</th></tr>';

    mainboards.forEach(mainboard => {
        comparisonTable += `<tr>
            <td>${mainboard.Tên}</td>
            <td>${mainboard.CPU}</td>
            <td>${mainboard.Chipset}</td>
            <td>${mainboard.Bộ_nhớ}</td>
            <td>${mainboard.Khe_mở_rộng}</td>
        </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end main

// card mạng
function compareNetworkCards() {
    const networkCards = [
        {
            Tên: "Card mạng WiFi 6 TPLink Archer TX3000E chuẩn AX3000",
            Chuẩn_mạng: "802.11ax",
            Tốc_độ: "3000Mbps",
            Cổng_kết_nối: "PCIe"
        },
        {
            Tên: "Card mạng WiFi 5 TP-Link T6E",
            Chuẩn_mạng: "802.11ac",
            Tốc_độ: "1300Mbps",
            Cổng_kết_nối: "PCIe"
        },
        {
            Tên: "Card mạng WiFi 6 TP-Link T9E",
            Chuẩn_mạng: "802.11ac",
            Tốc_độ: "1900Mbps",
            Cổng_kết_nối: "PCIe"
        },
        {
            Tên: "Card mạng LAN 10/100/1000Mbps PCIe",
            Chuẩn_mạng: "Ethernet",
            Tốc_độ: "1000Mbps",
            Cổng_kết_nối: "PCIe"
        },
        {
            Tên: "Card mạng USB WiFi TP-Link TL-WN725N",
            Chuẩn_mạng: "802.11n",
            Tốc_độ: "150Mbps",
            Cổng_kết_nối: "USB"
        }
    ];

    let comparisonTable = '<table align="center" width="60%" border="1px" cellspacing="1"><tr><th>Tên</th><th>Chuẩn mạng</th><th>Tốc độ</th><th>Cổng kết nối</th></tr>';

    networkCards.forEach(card => {
        comparisonTable += `<tr>
            <td>${card.Tên}</td>
            <td>${card.Chuẩn_mạng}</td>
            <td>${card.Tốc_độ}</td>
            <td>${card.Cổng_kết_nối}</td>
        </tr>`;
    });

    comparisonTable += '</table>';

    document.getElementById('comparison').innerHTML = comparisonTable;
}
// end card mạng

// hàm để thực thi khi chọn vào 1 linh kiện trong combobox
function handleComponentSelection() {
    const selectedComponent = document.getElementById('menu_linhkien').value;
    if (selectedComponent === 'RAM') {
        compareRAM();
    } else if (selectedComponent === 'CPU') {
        compareCPU();
    } else if (selectedComponent === 'oCung') {
        compareStorage();
    } else if (selectedComponent === 'boNguon') {
        comparePowerSupplies();
    } else if (selectedComponent === 'card_dh') {
        compareGraphicsCards();
    } else if (selectedComponent === 'main') {
        compareMainboards();
    } else if (selectedComponent === 'card_mang') {
        compareNetworkCards();
    }
    // Add more comparisons as needed for other components
}



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu_linhkien').addEventListener('change', handleComponentSelection);
});
