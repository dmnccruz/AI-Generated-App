import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";

export function AiEvaluations() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between bg-gray-100 dark:bg-gray-200 px-6 py-4 border-y border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">AI Evaluations</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400"
              placeholder="Search evaluations..."
              type="search"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <FilterIcon className="w-5 h-5" />
                <span className="sr-only">Filters</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filters</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Failed</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="date">
                <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="model">
                  Model
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="metrics">
                  Metrics
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Model</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Metrics</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="font-medium">GPT-3 Evaluation</div>
              </TableCell>
              <TableCell>
                <time className="text-gray-500 dark:text-gray-400">
                  April 15, 2023
                </time>
              </TableCell>
              <TableCell>
                <div>
                  Accuracy: 92%
                  <br />
                  F1-Score: 0.87
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="default">Completed</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">DALL-E 2 Evaluation</div>
              </TableCell>
              <TableCell>
                <time className="text-gray-500 dark:text-gray-400">
                  May 1, 2023
                </time>
              </TableCell>
              <TableCell>
                <div>
                  BLEU Score: 0.78
                  <br />
                  METEOR Score: 0.82
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="default">Completed</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Whisper Evaluation</div>
              </TableCell>
              <TableCell>
                <time className="text-gray-500 dark:text-gray-400">
                  May 10, 2023
                </time>
              </TableCell>
              <TableCell>
                <div>
                  WER: 12%
                  <br />
                  CTER: 0.91
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="default">Pending</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="font-medium">Stable Diffusion Evaluation</div>
              </TableCell>
              <TableCell>
                <time className="text-gray-500 dark:text-gray-400">
                  May 15, 2023
                </time>
              </TableCell>
              <TableCell>
                <div>
                  FID: 12.5
                  <br />
                  IS: 3.8
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="default">Failed</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="bg-gray-100 dark:bg-gray-200 px-6 py-4 border-y border-gray-200 dark:border-gray-700 flex justify-end">
        {/* <Pagination currentPage={1} totalPages={10} /> */}
      </div>
    </div>
  );
}

function FilterIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
