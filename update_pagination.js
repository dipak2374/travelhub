const fs = require('fs');
const files = [
  'AdminHotels.jsx', 'AdminFlights.jsx', 'AdminCars.jsx', 'AdminBuses.jsx', 'AdminTours.jsx', 'AdminPayments.jsx'
];
const path = 'd:/travelhub/client/src/dashboard/';

for (const file of files) {
  const filePath = path + file;
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('import Pagination')) {
    content = content.replace(/import toast from 'react-hot-toast';\n/, "import toast from 'react-hot-toast';\nimport Pagination from '../components/Pagination';\n");
  }
  
  if (!content.includes('const [currentPage')) {
    content = content.replace(/const \[search, setSearch\] = useState\(''\);/, "const [search, setSearch] = useState('');\n  const [currentPage, setCurrentPage] = useState(1);\n  const itemsPerPage = 5;");
  }

  if (!content.includes('const currentItems')) {
    content = content.replace(/(const filtered = .*?\);\n)/s, "$1\n  const totalPages = Math.ceil(filtered.length / itemsPerPage);\n  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);\n");
  }
  
  content = content.replace(/\{filtered\.map\(([a-z]) => \(/, "{currentItems.map($1 => (");
  
  const footerRegex = /<div className="p-4 border-t border-gray-100 flex items-center justify-between">\s*<p className="text-sm text-gray-500">Showing 1 to \{filtered\.length\} of \{filtered\.length\}.*?<\/div>\s*<\/div>/s;
  
  content = content.replace(footerRegex, `<div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} items
        </p>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>`);

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + file);
}
