using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PizzaStore.Migrations
{
    /// <inheritdoc />
    public partial class AddFKForSavedPizzaAndCartItemTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_SavedPizza_Id_Order",
                table: "SavedPizza",
                column: "Id_Order");

            migrationBuilder.CreateIndex(
                name: "IX_Carts_Id_Order",
                table: "Carts",
                column: "Id_Order");

            migrationBuilder.AddForeignKey(
                name: "FK_Carts_Orders_Id_Order",
                table: "Carts",
                column: "Id_Order",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SavedPizza_Orders_Id_Order",
                table: "SavedPizza",
                column: "Id_Order",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Carts_Orders_Id_Order",
                table: "Carts");

            migrationBuilder.DropForeignKey(
                name: "FK_SavedPizza_Orders_Id_Order",
                table: "SavedPizza");

            migrationBuilder.DropIndex(
                name: "IX_SavedPizza_Id_Order",
                table: "SavedPizza");

            migrationBuilder.DropIndex(
                name: "IX_Carts_Id_Order",
                table: "Carts");
        }
    }
}
