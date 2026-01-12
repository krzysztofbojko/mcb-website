import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'http://localhost:3000';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

async function checkUrl(url) {
    try {
        const res = await fetch(url);
        return { ok: res.ok, status: res.status, text: await res.text() };
    } catch (e) {
        return { ok: false, error: e.message };
    }
}

async function runTests() {
    console.log(`Starting system verification for MCB Website (${BASE_URL})...\n`);
    let errors = 0;

    // TEST 1: File Existence (tlo-glowna.jpg)
    console.log('Test 1: Checking background image file existence...');
    // Adjusted path: script is in /scripts, so we go up one level to root, then public/images
    const bgPath = path.join(__dirname, '..', 'public', 'images', 'tlo-glowna.jpg');
    if (fs.existsSync(bgPath)) {
        console.log(`${GREEN}PASS: File 'tlo-glowna.jpg' found.${RESET}`);
    } else {
        console.log(`${RED}FAIL: File 'tlo-glowna.jpg' NOT found in '${bgPath}'. Background will not display!${RESET}`);
        console.log(`${YELLOW}Action required: Please upload 'tlo-glowna.jpg' to 'public/images/'.$${RESET}`);
        errors++;
    }

    // TEST 2: Homepage Availability & Content
    console.log('\nTest 2: Verifying Homepage...');
    const home = await checkUrl(BASE_URL);
    if (home.ok) {
        console.log(`${GREEN}PASS: Homepage is accessible (Status 200).${RESET}`);
        
        // Check for Background Image code
        if (home.text.includes('tlo-glowna.jpg') && home.text.includes('fixed inset-0')) {
             console.log(`${GREEN}PASS: Background image code structure detected.${RESET}`);
        } else {
             console.log(`${RED}FAIL: Background image code missing or incorrect on Homepage.${RESET}`);
             errors++;
        }

        // Check for Gallery Link in Nav
        if (home.text.includes('href="/galeria"')) {
            console.log(`${GREEN}PASS: 'Galeria' link found in navigation.${RESET}`);
        } else {
            console.log(`${RED}FAIL: 'Galeria' link NOT found in navigation.${RESET}`);
            errors++;
        }

        // Check for REMOVAL of old promo section
        if (!home.text.includes(' Zobacz nasze centrum')) {
            console.log(`${GREEN}PASS: Old Gallery promo section appears to be removed.${RESET}`);
        } else {
            console.log(`${RED}FAIL: Old Gallery promo text (' Zobacz nasze centrum') still found on homepage.${RESET}`);
            errors++;
        }

    } else {
        console.log(`${RED}FAIL: Homepage not accessible. Is Docker running? Error: ${home.error || home.status}${RESET}`);
        errors++;
    }

    // TEST 3: Gallery Page Availability
    console.log('\nTest 3: Verifying Gallery Page...');
    const gallery = await checkUrl(`${BASE_URL}/galeria`);
    if (gallery.ok) {
        console.log(`${GREEN}PASS: Gallery page is accessible (Status 200).${RESET}`);
    } else {
        console.log(`${RED}FAIL: Gallery page returned error ${gallery.status}.${RESET}`);
        errors++;
    }

    // SUMMARY
    console.log('\n--------------------------------------------------');
    if (errors === 0) {
        console.log(`${GREEN}ALL CHECKS PASSED. The website meets the requirements.${RESET}`);
    } else {
        console.log(`${RED}VERIFICATION COMPLETED WITH ${errors} ERRORS.${RESET}`);
    }
}

runTests();
